import type { ChangeEvent } from "react";
import {
  FindAllDocument,
  Todo,
  TodoStatus,
  useDeleteMutation,
  useUpdateStatusMutation,
} from "../../../apollo/generated/hooks";

export const useHooks = () => {
  const [deleteTodo] = useDeleteMutation({ refetchQueries: [FindAllDocument] });
  const [updateStatus] = useUpdateStatusMutation({
    refetchQueries: [FindAllDocument],
  });

  const onChange = (id: string, e: ChangeEvent<HTMLSelectElement>) => {
    const status = e.target.value as TodoStatus;
    updateStatus({ variables: { todo: { id, status } } });
  };

  const onClick = (id: string) => {
    deleteTodo({ variables: { todoId: { id } } });
  };

  return { onChange, onClick };
};
