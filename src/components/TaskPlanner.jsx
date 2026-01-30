import { useState } from "react";
import "./Taskplanner.css";

function TaskPlanner() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [showCongrats, setShowCongrats] = useState(false);

  const addTask = () => {
    if (!task.trim()) return;

    setTodos([
      ...todos,
      { id: Date.now(), text: task, completed: false }
    ]);
    setTask("");
  };

  const completeTask = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: true } : t
      )
    );

    setShowCongrats(true);
    setTimeout(() => setShowCongrats(false), 2000); // ✅ 2 seconds
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const editTask = (id) => {
    const newText = prompt("Edit your task:");
    if (!newText) return;

    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, text: newText } : t
      )
    );
  };

  return (
    <div className="todo-page">
      {showCongrats && (
        <div className="congrats-text">
          ✅ Task Completed Successfully!
        </div>
      )}

      <div className="todo-container">
        <h2>TASK PLANNER</h2>

        <div className="todo-input">
          <input
            type="text"
            placeholder="Enter your task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={addTask}>Add</button>
        </div>

        <ul className="todo-list">
          {todos.length === 0 && <p className="empty">No tasks yet 🌱</p>}

          {todos.map((t) => (
            <li key={t.id} className={t.completed ? "done" : ""}>
              <span>{t.text}</span>

              <div className="actions">
                {!t.completed && (
                  <button className="complete" onClick={() => completeTask(t.id)}>
                    Complete✔
                  </button>
                )}
                <button className="edit" onClick={() => editTask(t.id)}>Edit</button>
                <button className="delete" onClick={() => deleteTask(t.id)}>Delete❌</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskPlanner;
