import { useStyle } from "@/hooks";
import { FC, HTMLAttributes } from "react";

interface BoxProps extends HTMLAttributes<HTMLElement> {}

export const Box: FC<BoxProps> = ({ className, children, ...props }) => {
  const { getClassnames } = useStyle();
  return (
    <div
      className={getClassnames(
        `box bg-neutral-900
      rounded-lg
      h-fit
      w-full`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
