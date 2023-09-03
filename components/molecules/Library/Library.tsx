"use client";

import { FC, HTMLAttributes } from "react";
import { SpotifyIcons } from "@/components";

interface LibraryProps extends HTMLAttributes<HTMLElement> {}

export const Library: FC<LibraryProps> = ({ children, ...props }) => {
  const onClick = () => {
    // Handle upload later
  };
  return (
    <div className="flex flex-col" {...props}>
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <SpotifyIcons
            type="play-list"
            className="text-neutral-400"
            size={26}
          />
          <p className="text-neutral-400 font-medium text-md">Your library</p>
        </div>
        <SpotifyIcons
          type="plus"
          className="text-neutral-400 cursor-pointer hover:text-white transition"
          size={20}
          onClick={onClick}
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">List of Songs!</div>
    </div>
  );
};
