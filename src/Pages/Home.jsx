import React, { useState, useEffect } from "react";
import "./Home.css";

const quotesData = [
  {
    title: "Stay Focused",
    description:
      "Small daily progress leads to big results. Stay consistent and trust the process."
  },
  {
    title: "One Task at a Time",
    description:
      "Multitasking slows you down. Focus deeply on one task and give it your best."
  },
  {
    title: "Build Your Streak",
    description:
      "Success is built by showing up every day, even when motivation is low."
  },
  {
    title: "Discipline Beats Motivation",
    description:
      "Motivation comes and goes, but discipline keeps you moving forward."
  },
  {
    title: "Progress Over Perfection",
    description:
      "You don’t need to be perfect. You just need to keep moving forward."
  },
  {
    title: "Deep Work Wins",
    description:
      "Protect your focus. Deep, uninterrupted work creates real growth."
  },
  {
    title: "Consistency Is Power",
    description:
      "Small actions done consistently are more powerful than rare bursts of effort."
  },
  {
    title: "Mind Over Mood",
    description:
      "You won’t always feel motivated. Train your mind to work anyway."
  }
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % quotesData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      <div className="motivational-card">
        <h3>{quotesData[current].title}</h3>
        <p>{quotesData[current].description}</p>
      </div>

      <div className="sitecontent">
        <p>
          This platform is designed to help you stay focused, build consistency
          , and grow step by step in everything you do. In a world full of distractions,
           we aim to create a calm and motivating space where you can direct your energy toward 
           what truly matters. Whether you are learning new skills, working toward your career goals, 
           or focusing on personal growth, this platform supports you in developing discipline, clarity, 
           and confidence. By encouraging small daily progress and mindful effort, we help you stay 
           motivated, reduce overwhelm, and move forward with purpose. 
           Our goal is not just productivity, but creating 
          a balanced mindset that keeps you inspired, focused, and mentally strong every single day.
        </p>
      </div>
    </div>
  );
};

export default Home;
