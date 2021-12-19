import { VFC } from "react";
import { useHooks } from "./hooks";

export const TodoForm: VFC = () => {
  const { descriptionRef, onSubmit, titleRef } = useHooks();

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
