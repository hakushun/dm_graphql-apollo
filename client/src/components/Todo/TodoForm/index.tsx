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
    <form onSubmit={onSubmit} className="flex flex-col gap-5 max-w-screen-lg mr-auto ml-auto p-3">
      <fieldset>
        <legend>
          <h2 className="py-2 text-xl">Todo Form</h2>
        </legend>
        <div className="flex flex-col gap-3">
          <div className="flex gap-3 items-center">
            <label htmlFor="title">Title:</label>
            <input type="text" required ref={titleRef} className="py-0.5 px-2 rounded" />
          </div>
          <div className="flex gap-3 items-center">
            <label htmlFor="title">Description:</label>
            <input type="text" ref={descriptionRef} className="py-0.5 px-2 rounded" />
          </div>
        </div>
      </fieldset>
      <div>
        <button type="submit" className="py-1 px-3 bg-red-300 rounded">
          Submit
        </button>
      </div>
    </form>
  );
};
