/* eslint-disable react/no-unescaped-entities */
"use client";
import { resetTask, setTask } from "@/redux/features/tasks/tasksSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useCreateTaskMutation } from "@/redux/services/tasks";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent } from "react";

function CreateTaskPage() {
  const { task } = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();
  const [createTask] = useCreateTaskMutation();
  const router = useRouter();

  const handleChange = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = target;
    const checked = (target as HTMLInputElement).checked;
    dispatch(setTask({ name, value, checked }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTask(task);
    dispatch(resetTask());
    router.push("/");
  };

  return (
    <section className="min-h-[calc(100vh-76px)] flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-50 text-gray-950 p-5 flex flex-col gap-5 rounded font-medium"
      >
        <div>
          <label htmlFor="title" className="text-xl sm:text-2xl">
            Title
          </label>
          <input
            name="title"
            type="text"
            id="title"
            placeholder="Enter a title"
            value={task.title}
            onChange={handleChange}
            className="w-full bg-transparent border px-4 py-2 rounded shadow-md text-lg sm:text-xl text-gray-800 mt-1"
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="text-xl sm:text-2xl font-medium"
          >
            The description
          </label>
          <textarea
            name="description"
            id="description"
            placeholder="Enter a description"
            value={task.description}
            onChange={handleChange}
            className="min-h-[125px] w-full bg-transparent border px-4 py-2 rounded shadow-md text-lg sm:text-xl text-gray-800 mt-1 resize-none"
          ></textarea>
        </div>
        <div className="flex justify-between items-center">
          <label
            htmlFor="completed"
            className="text-xl sm:text-2xl font-medium"
          >
            It's completed?
          </label>
          <input
            name="completed"
            type="checkbox"
            id="completed"
            checked={task.completed}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="bg-red-700 hover:bg-red-600 transition-colors ease-in py-2 px-4 text-xl sm:text-2xl text-gray-50 rounded-full"
        >
          Create Task
        </button>
      </form>
    </section>
  );
}

export default CreateTaskPage;
