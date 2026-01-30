import { useState, useEffect, useRef } from "react";
import "./PomodoroTimer.css";

const STUDY_TIME = 15 * 60;
const BREAK_TIME = 5 * 60;

function PomodoroTimer() {
  const [time, setTime] = useState(STUDY_TIME);
  const [mode, setMode] = useState("study");
  const [paused, setPaused] = useState(true);
  const [started, setStarted] = useState(false);

  // ✅ DEFINE stats (this fixes your error)
  const [stats, setStats] = useState({
    studyCompleted: 0,
    breakCompleted: 0,
  });

  // prevents double count
  const completedRef = useRef(false);

  useEffect(() => {
    if (!started || paused) return;

    const interval = setInterval(() => {
      setTime(prev => {
        if (prev === 1 && !completedRef.current) {
          completedRef.current = true;

          setStats(s => ({
            studyCompleted:
              mode === "study" ? s.studyCompleted + 1 : s.studyCompleted,
            breakCompleted:
              mode === "break" ? s.breakCompleted + 1 : s.breakCompleted,
          }));
        }

        return prev > 0 ? prev - 1 : 0;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [started, paused, mode]);

  const startTimer = () => {
    setStarted(true);
    setPaused(false);
  };

  const togglePause = () => setPaused(p => !p);

  const startStudy = () => {
    setMode("study");
    setTime(STUDY_TIME);
    setPaused(true);
    setStarted(false);
    completedRef.current = false;
  };

  const startBreak = () => {
    setMode("break");
    setTime(BREAK_TIME);
    setPaused(true);
    setStarted(false);
    completedRef.current = false;
  };

  const mins = Math.floor(time / 60);
  const secs = time % 60;
  const format = n => String(n).padStart(2, "0");

  return (
    <div className="center-box">

    <div className="container">
      <h3>{mode === "study" ? "📘 Study Time" : "☕ Break Time"}</h3>

      <div className="timer-text">
        {format(mins)}:{format(secs)}
      </div>

      {!started ? (
        <button onClick={startTimer}>Start</button>
      ) : (
        <button onClick={togglePause}>
          {paused ? "Resume" : "Pause"}
        </button>
      )}

      <div className="mode-buttons">
        <button onClick={startStudy}>Study</button>
        <button onClick={startBreak}>Break</button>
      </div>

      {/* ✅ Stats now WORK */}
      <div className="stats">
        <p>🌱 Pomodoros Completed: {stats.studyCompleted}</p>
        <p>☕ Breaks Completed: {stats.breakCompleted}</p>
      </div>
    </div>
    </div>
  );
}

export default PomodoroTimer;
