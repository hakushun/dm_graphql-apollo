import { FormEvent, useRef, VFC } from "react";
import { FindAllDocument, useCreateMutation } from "../../../apollo/generated/hooks";

export const TodoForm: VFC = () => {
  const titleRef = useRef<HTMLInputElement | null>(null);
  const descriptionRef = useRef<HTMLInputElement | null>(null);
  const [createTodo] = useCreateMutation({ refetchQueries: [FindAllDocument] });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!titleRef.current || !descriptionRef.current) return;
    await createTodo({
      variables: {
        todo: {
          title: titleRef.current.value,
          description: descriptionRef.current.value,
        },
      },
    });
    titleRef.current.value = "";
    descriptionRef.current.value = "";
  };

  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <legend>
          <h2>Todo Form</h2>
        </legend>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" required ref={titleRef} />
        </div>
        <div>
          <label htmlFor="title">Description:</label>
          <input type="text" ref={descriptionRef} />
        </div>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  );
};
