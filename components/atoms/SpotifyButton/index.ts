import { lazyLoad } from "@/utils";
import { lazy } from "react";

export const SpotifyButton = lazyLoad(
  () => import("./SpotifyButton"),
  (module) => module.SpotifyButton
);
