import type { FormEvent, VFC } from "react";
import { FindAllDocument, useCreateMutation } from "../../../apollo/generated/hooks";

export const TodoForm: VFC = () => {
  const [createTodo] = useCreateMutation({ refetchQueries: [FindAllDocument] });
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTodo({
      variables: {
        todo: {
          title: "title",
          description: "description",
        },
      },
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <legend>
          <h2>Todo Form</h2>
        </legend>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" required />
        </div>
        <div>
          <label htmlFor="title">Description:</label>
          <input type="text" />
        </div>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  );
};
