"use client";
import Loader from "@/components/Loader";
import TasksList from "@/components/TasksList";
import { useGetTasksQuery } from "@/redux/services/tasks";

function HomePage() {
  const { isFetching, isLoading, isError, error, isSuccess, data } =
    useGetTasksQuery(null);

  if (isFetching || isLoading) return <Loader />;

  if (isError) {
    console.log(error);
    return (
      <section className="mt-10 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold">An error occurred</h1>
      </section>
    );
  }

  if (data && data.length < 1) {
    return (
      <section className="mt-10 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold">No tasks...</h1>
      </section>
    );
  }

  return (
    <section className="mt-10">
      {isSuccess && <TasksList tasks={data} />}
    </section>
  );
}

export default HomePage;
