import type { ChangeEvent, VFC } from "react";
import {
  FindAllDocument,
  Todo,
  TodoStatus,
  useDeleteMutation,
  useUpdateStatusMutation,
} from "../../../apollo/generated/hooks";

type Props = {
  todo: Pick<Todo, "id" | "title" | "description" | "status"> | undefined | null;
};
export const TodoItem: VFC<Props> = ({ todo }) => {
  const [deleteTodo] = useDeleteMutation({ refetchQueries: [FindAllDocument] });
  const [updateStatus] = useUpdateStatusMutation({
    refetchQueries: [FindAllDocument],
  });

  if (!todo) return null;

  const onClick = () => {
    deleteTodo({ variables: { todoId: { id: todo.id } } });
  };

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const status = e.target.value as TodoStatus;
    updateStatus({ variables: { todo: { id: todo.id, status } } });
  };

  return (
    <li key={todo.id} className="flex gap-3 items-center">
      <span className="">{todo.title}</span>
      <span className="">{todo.description}</span>
      <select value={todo.status} onChange={onChange}>
        <option value={TodoStatus.New}>{TodoStatus.New}</option>
        <option value={TodoStatus.InProgress}>{TodoStatus.InProgress}</option>
        <option value={TodoStatus.Complete}>{TodoStatus.Complete}</option>
      </select>
      <button type="button" onClick={onClick} className="bg-red-200 rounded px-2">
        delete
      </button>
    </li>
  );
};
