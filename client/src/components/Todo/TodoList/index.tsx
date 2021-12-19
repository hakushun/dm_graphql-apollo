import type { VFC } from "react";
import { useFindAllQuery } from "../../../apollo/generated/hooks";
import { TodoItem } from "../TodoItem";

export const TodoList: VFC = () => {
  const { data, loading, error } = useFindAllQuery();

  if (loading) return <div>isLoading...</div>;
  if (error) return <div>Something Wrong,,,</div>;

  return (
    <section>
      <h2>Todo List</h2>
      <ul>
        {data && data.todos && data.todos.map((todo) => <TodoItem key={todo?.id} todo={todo} />)}
      </ul>
    </section>
  );
};
