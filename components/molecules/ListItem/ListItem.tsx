"use client";

import Image from "next/image";
import { FC, ButtonHTMLAttributes } from "react";
import { useRouter } from "next/navigation";
import { SpotifyButton, SpotifyIcons } from "@/components";

interface ListItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  image: string;
  name?: string;
  href: string;
}

export const ListItem: FC<ListItemProps> = ({
  className,
  image,
  name,
  href,
  children,
  ...props
}) => {
  const router = useRouter();

  const onClick = () => {
    // Add authentication before push
    router.push(href);
  };

  return (
    <SpotifyButton
      className="relative group rounded-md overflow-hidden justify-start gap-x-4 bg-neutral-100/10 font-normal pr-4 hover:bg-neutral-100/20"
      buttonType="dark"
      {...props}
    >
      <div className="relative min-h-[64px] min-w-[64px]">
        <Image className="object-cover" fill src={image} alt="Image" />
      </div>
      <p className="font-medium truncate py-5">{name}</p>
      <div className="absolute transition opacity-0 rounded-full flex items-center justify-center bg-green-500 p-4 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-110">
        <SpotifyIcons type="play" className="text-black" />
      </div>
    </SpotifyButton>
  );
};
