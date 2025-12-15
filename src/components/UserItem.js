import { useDrop } from "react-dnd";
import { getTasks, saveTasks } from "../utils/storage";

const UserItem = ({ user }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "TASK",
    drop: (item) => {
      if (!item || !item.taskId || !user?.id) return;
      const tasks = getTasks();

      if (!Array.isArray(tasks)) return;

      const updatedTasks = tasks.map((task) =>
        task.id === item.taskId ? { ...task, assgineeId: user.id } : task
      );
      saveTasks(updatedTasks);
    },
    collect: (monitor) => ({ isOver: monitor.isOver() }),
  }));

  return (
    <div
      ref={drop}
      style={{
        padding: "10px",
        margin: "10px",
        border: "2px dashed gray",
        backgroundColor: isOver ? "#d1fae5" : "#f9f9f9",
      }}
    >
      {user.username}
    </div>
  );
};

export default UserItem;
