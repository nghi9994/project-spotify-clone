import { AiOutlinePlus } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { TbPlaylist } from "react-icons/tb";

import { FC, SVGProps } from "react";

interface SpotifyIconsProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  type:
    | "home"
    | "play"
    | "play-list"
    | "plus"
    | "search"
    | "left-arrow"
    | "right-arrow";
}

const SpotifyIconsComponent = {
  home: HiHome,
  play: FaPlay,
  "play-list": TbPlaylist,
  plus: AiOutlinePlus,
  search: BiSearch,
  "left-arrow": RxCaretLeft,
  "right-arrow": RxCaretRight,
};

export const SpotifyIcons: FC<SpotifyIconsProps> = ({
  className,
  type,
  ...props
}: SpotifyIconsProps) => {
  const SvgComponent = SpotifyIconsComponent[type];
  return <SvgComponent className={`icon ${type} ${className}`} {...props} />;
};
