import { FormEvent, useRef } from "react";
import { FindAllDocument, useCreateMutation } from "../../../apollo/generated/hooks";

export const useHooks = () => {
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
  return { descriptionRef, onSubmit, titleRef };
};
