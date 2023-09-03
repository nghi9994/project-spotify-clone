"use client";

// import { Box } from "@/components";
import { usePathname } from "next/navigation";
import { FC, HTMLAttributes, useMemo } from "react";

import { Box, Library, SidebarItem, SpotifyIcons } from "@/components";
import { useStyle } from "@/hooks";

interface SidebarProps extends HTMLAttributes<HTMLDivElement> {}

export const Sidebar: FC<SidebarProps> = ({ children, ...props }) => {
  const pathname = usePathname();
  const { getClassnames } = useStyle();

  const routes = useMemo(
    () => [
      {
        icon: <SpotifyIcons type="home" size={26} />,
        label: "Home",
        active: pathname !== "/search",
        href: "/",
      },
      {
        icon: <SpotifyIcons type="search" size={26} />,
        label: "Search",
        active: pathname === "/search",
        href: "/search",
      },
    ],
    [pathname]
  );

  return (
    <div className={getClassnames(`side-bar flex h-full`)} {...props}>
      <div className="side-bar__left-side hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          <Library />
        </Box>
      </div>
      <main className="side-bar__right-side  h-full flex-1 overflow-y-auto py-2">
        {children}
      </main>
    </div>
  );
};
