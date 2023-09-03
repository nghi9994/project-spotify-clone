import { lazyLoad } from "@/utils";

export const Library = lazyLoad(
  () => import("./Library"),
  (module) => module.Library
);
