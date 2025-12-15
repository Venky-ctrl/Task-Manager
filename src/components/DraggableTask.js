import { useDrag } from "react-dnd";

const DraggableTask = ({ task }) => {
  const [{ isDragging, drag }] = useDrag(() => ({
    type: "TASK",
    item: { taskId: task.id },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  }));

  return (
    <div
      ref={drag}
      style={{
        padding: "8px",
        margin: "6px",
        border: "1px solid black",
        backgroundColor: "white",
        cursor: "move",
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      {task.title}
    </div>
  );
};

export default DraggableTask;
