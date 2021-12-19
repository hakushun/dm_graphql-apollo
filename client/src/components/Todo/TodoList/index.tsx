import type { VFC } from "react";
import { TodoItem } from "../TodoItem";
import { useHooks } from "./hooks";

export const TodoList: VFC = () => {
  const { data, loading, error } = useHooks();

  if (loading) return <div>isLoading...</div>;
  if (error) return <div>Something Wrong,,,</div>;

  return (
    <section className="flex flex-col max-w-screen-lg mr-auto ml-auto p-3">
      <h2 className="py-2 text-xl">Todo List</h2>
      <ul className="flex flex-col gap-2">
        {data && data.todos && data.todos.map((todo) => <TodoItem key={todo?.id} todo={todo} />)}
      </ul>
    </section>
  );
};
