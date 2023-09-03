import { lazyLoad } from "@/utils";

export const Box = lazyLoad(
  () => import("./Box"),
  (module) => module.Box
);
