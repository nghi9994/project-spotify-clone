import { useStyle } from "@/hooks";
import Link from "next/link";
import { FC, ComponentProps, ReactNode } from "react";

interface SidebarItemProps extends ComponentProps<typeof Link> {
  icon: ReactNode;
  active?: boolean;
  label: string;
}

export const SidebarItem: FC<SidebarItemProps> = ({
  active,
  icon,
  children,
  label,
  ...props
}) => {
  const { getClassnames } = useStyle();
  return (
    <Link
      className={getClassnames(
        `flex
      flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white  transition text-neutral-400 py-1`,
        active && "text-white"
      )}
      {...props}
    >
      {icon}
      <p className="truncate w-full">{label}</p>
    </Link>
  );
};
