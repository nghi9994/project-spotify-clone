import { lazyLoad } from "@/utils";

export const Header = lazyLoad(
  () => import("./Header"),
  (module) => module.Header
);
