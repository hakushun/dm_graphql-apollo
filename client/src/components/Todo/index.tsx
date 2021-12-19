import type { VFC } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

export const Todo: VFC = () => {
  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  );
};
