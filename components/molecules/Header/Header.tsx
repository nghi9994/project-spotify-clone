"use client";

import { useStyle } from "@/hooks";
import { useRouter } from "next/navigation";
import { FC, HTMLAttributes } from "react";
import { SpotifyButton, SpotifyIcons } from "@/components";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const Header: FC<HeaderProps> = ({ className, children, ...props }) => {
  const router = useRouter();
  const { getClassnames } = useStyle();

  const handleLogout = () => {
    // Handle logout in the future
  };

  return (
    <div
      className={getClassnames(
        `h-fit bg-gradient-to-b from-emerald-800 p-6`,
        className
      )}
      {...props}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <SpotifyButton buttonType="dark" onClick={() => router.back()}>
            <SpotifyIcons type="left-arrow" size={35} />
          </SpotifyButton>
          <SpotifyButton buttonType="dark" onClick={() => router.forward()}>
            <SpotifyIcons type="right-arrow" size={35} />
          </SpotifyButton>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <SpotifyButton buttonType="light" className="p-2">
            <SpotifyIcons type="home" size={20} />
          </SpotifyButton>
          <SpotifyButton buttonType="light" className="p-2">
            <SpotifyIcons type="search" size={20} />
          </SpotifyButton>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          <>
            <div>
              <SpotifyButton buttonType="transparent" onClick={() => {}}>
                Sign up
              </SpotifyButton>
            </div>
            <div>
              <SpotifyButton
                buttonType="light"
                onClick={() => {}}
                className="px-6 py-2"
              >
                Login
              </SpotifyButton>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  );
};
