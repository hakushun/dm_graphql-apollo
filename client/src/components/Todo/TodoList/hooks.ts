import { useFindAllQuery } from "../../../apollo/generated/hooks";

export const useHooks = () => {
  const { data, loading, error } = useFindAllQuery();

  return { data, loading, error };
};
