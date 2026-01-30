import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import PomodoroTimer from "./components/PomodoroTimer";
import Tips from "./components/Tips";
import TaskPlanner from "./components/TaskPlanner";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pomodoro" element={<PomodoroTimer />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/task" element={<TaskPlanner />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
