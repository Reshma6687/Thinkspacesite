import React, { useState } from "react";
import "./Tips.css";

function Tips() {
  const stages = [
    "🌱",
    "🌿",
    "🍀",
    "🌳",
    "🌸",
    "🍎"
  ];

  const rewardQuotes = [
    "🌟 Small steps every day lead to big success.",
    "💪 You showed up. That’s already a win.",
    "🔥 Consistency beats talent when talent gives up.",
    "🌈 Progress, not perfection. You did great!",
    "🚀 This effort will matter more than you know.",
    "🌱 Growth happens quietly—just like today.",
    "🏆 You kept going. Be proud of yourself.",
    "✨ Discipline today, success tomorrow."
  ];

  const [growth, setGrowth] = useState(() => {
    const saved = localStorage.getItem("plantGrowth");
    return saved ? Number(saved) : 0;
  });

  const [reward, setReward] = useState("");

  const waterPlant = () => {
    if (growth < stages.length - 1) {
      const next = growth + 1;
      setGrowth(next);
      localStorage.setItem("plantGrowth", next);

      // Show reward only when Big Tree reached
      if (next === stages.length - 1) {
        const randomQuote =
          rewardQuotes[Math.floor(Math.random() * rewardQuotes.length)];
        setReward(randomQuote);
      }
    } else {
      // Restart growth
      setGrowth(0);
      setReward("");
      localStorage.setItem("plantGrowth", 0);
    }
  };

  return (
    <div className="plant-page">
      <h1 className="title">Study Plant</h1>
      <p className="subtitle">
        Study → Grow → Earn Motivation
      </p>

      <span className="plant-emoji">{stages[growth]}</span>

      {/* Reward Message */}
      {reward && (
        <div className="reward-box">
          <h3>🎉 Congratulations!</h3>
          <p>{reward}</p>
        </div>
      )}

      <button className="water-btn" onClick={waterPlant}>
        {growth === stages.length - 1
          ? "Restart Growth 🌱"
          : "I Studied Today 💧"}
      </button>
    </div>
  );
}

export default Tips;
