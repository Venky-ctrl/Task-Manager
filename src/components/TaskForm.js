import { useState } from "react";
import { getTasks, saveTasks } from "../utils/storage";
import { v4 as uuidv4 } from "uuid";

const TaskForm = ({users, refreshTasks}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assigneeId, setAssigneeId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !assigneeId) return;

    const newTask = {
      id: uuidv4(),
      title,
      description,
      assigneeId,
      status: "Pending",
    };

    const tasks = getTasks();
    saveTasks([...tasks, newTask]);

    setTitle("");
    setDescription("");
    setAssigneeId("");
    refreshTasks();
  };

  return (
    <div>
      <h3>Create Task</h3>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <br />

        <select
          value={assigneeId}
          onChange={(e) => setAssigneeId(e.target.value)}
        >
          <option value="">Assign to User</option>
          {users
            .filter((u) => u.role === "user")
            .map((user) => (
              <option key={user.id} value={user.id}>
                {user.username}
              </option>
            ))}
        </select>
        <br />
        <br />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
