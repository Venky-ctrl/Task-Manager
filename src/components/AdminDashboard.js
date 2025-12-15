import React, {useState, useEffect} from "react";
import { getTasks } from "../utils/storage";
import DraggableTask from "./DraggableTask";
import TaskForm from "./TaskForm";
import UserItem from "./UserItem";

const AdminDashboard = () => {
  const [tasks, setTasks] = useState([])
  const [users, setUsers] = useState([])

  const refreshTasks = () => setTasks(getTasks())

  useEffect(() => {
    setTasks(getTasks())
    setUsers(JSON.parse(localStorage.getItem('users')) || [])
  }, [])

  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>

      <TaskForm users={users} refreshTasks={refreshTasks} />

      <div className="flex">
        <div className="column">
          <h3>Tasks</h3>
          {tasks.map((task) =>
            task && task.id ? <DraggableTask key={task.id} task={task} /> : null
          )}
        </div>

        <div className="column">
          <h3>Users</h3>
          {users
            .filter((u) => u.role === "user")
            .map((user) => (
              <UserItem key={user.id} user={user} yyy/>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
