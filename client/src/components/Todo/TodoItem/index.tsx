import type { VFC } from "react";
import { Todo, TodoStatus } from "../../../apollo/generated/hooks";
import { useHooks } from "./hooks";

type Props = {
  todo: Pick<Todo, "id" | "title" | "description" | "status"> | undefined | null;
};
export const TodoItem: VFC<Props> = ({ todo }) => {
  const { onChange, onClick } = useHooks();

  if (!todo) return null;

  return (
    <li key={todo.id} className="flex gap-3 items-center">
      <span className="">{todo.title}</span>
      <span className="">{todo.description}</span>
      <select value={todo.status} onChange={(e) => onChange(todo.id, e)}>
        <option value={TodoStatus.New}>{TodoStatus.New}</option>
        <option value={TodoStatus.InProgress}>{TodoStatus.InProgress}</option>
        <option value={TodoStatus.Complete}>{TodoStatus.Complete}</option>
      </select>
      <button type="button" onClick={() => onClick(todo.id)} className="bg-red-200 rounded px-2">
        delete
      </button>
    </li>
  );
};
