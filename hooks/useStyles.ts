import { twMerge, ClassNameValue } from "tailwind-merge";

export const useStyle = () => {
  const getClassnames = (...classLists: ClassNameValue[]) => {
    return twMerge(classLists);
  };

  return { getClassnames };
};
