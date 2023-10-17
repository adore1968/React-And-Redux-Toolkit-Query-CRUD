import { Tasks } from "@/utils/interfaces";
import TaskCard from "./TaskCard";

interface Props {
  tasks: Tasks;
}

function TasksList({ tasks }: Props) {
  return (
    <div className="grid gap-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TasksList;
