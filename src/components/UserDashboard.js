import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { getTasks, saveTasks } from "../utils/storage";

const UserDashboard = () => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (!user) return;

    const allTasks = getTasks();
    const assignedTasks = allTasks.filter((task) => task.assigneeId === user.id);
    setTasks(assignedTasks);
  }, [user]);

  const markCompleted = (taskId) => {
    const updatedTasks = getTasks().map((task) =>
      task.id === taskId ? { ...task, status: "Completed" } : task
    );

    saveTasks(updatedTasks);
    setTasks(updatedTasks.filter(t => t.assigneeId === user.id));
  };

  return (
    <div className="dashboard">
      <h2>User Dashboard</h2>
      {tasks.length === 0 && <p>No Tasks Assigned</p>}

      {tasks.map((task) => (
        <div className="task" key={task.id}>
          <p>
            <b>{task.title}</b>
          </p>
          <p>{task.description}</p>
          <p>Status: {task.status}</p>

          {task.status !== "Completed" && (
            <button onClick={() => markCompleted(task.id)}>
              Mark as Completed
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default UserDashboard;
