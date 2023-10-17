/* eslint-disable react/no-unescaped-entities */
import { useDeleteTaskMutation } from "@/redux/services/tasks";
import { Task } from "@/utils/interfaces";
import Link from "next/link";

interface Props {
  task: Task;
}

function TaskCard({ task }: Props) {
  const [deleteTask] = useDeleteTaskMutation();

  return (
    <div className="bg-gray-50 text-gray-950 p-5 flex flex-col gap-5 rounded">
      <div>
        <h3 className="text-xl sm:text-2xl font-medium">
          <span className="text-red-600">{task.id}.</span> {task.title}
        </h3>
        <p className="text-lg sm:text-xl mt-1 mb-2 text-gray-800">
          {task.description}
        </p>
        <div className="flex justify-between items-center text-lg sm:text-xl">
          <p>It's completed?</p>
          <p
            className={`${task.completed ? "text-green-600" : "text-red-600"}`}
          >
            {task.completed ? "Yes!" : "No!"}
          </p>
        </div>
      </div>
      <div className="flex gap-5 items-center text-lg sm:text-xl">
        <button
          type="button"
          onClick={() => deleteTask(task.id)}
          className="bg-red-700 hover:bg-red-600 transition-colors ease-in px-4 py-2 rounded text-gray-50 shadow-md"
        >
          Delete
        </button>
        <Link
          href={`/update-task/${task.id}`}
          className="bg-green-700 hover:bg-green-600 transition-colors ease-in px-4 py-2 rounded text-gray-50 shadow-md"
        >
          Update
        </Link>
      </div>
    </div>
  );
}

export default TaskCard;
