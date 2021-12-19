import type { VFC } from "react";
import { useFindAllQuery } from "../../../apollo/generated/hooks";

export const TodoList: VFC = () => {
  const { data, loading, error } = useFindAllQuery();

  if (loading) return <div>isLoading...</div>;
  if (error) return <div>Something Wrong,,,</div>;

  return (
    <section>
      <h2>Todo List</h2>
      <ul>
        {data?.todos?.map((todo) => (
          <li key={todo?.id}>
            <span>{todo?.title}</span>
            <span>{todo?.description}</span>
            <span>{todo?.status}</span>
            <button type="button">delete</button>
          </li>
        ))}
      </ul>
    </section>
  );
};
