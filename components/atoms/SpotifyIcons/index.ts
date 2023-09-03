import { lazyLoad } from "@/utils";

export const SpotifyIcons = lazyLoad(
  () => import("./Icons"),
  (module) => module.SpotifyIcons
);
