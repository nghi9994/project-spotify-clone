import { lazyLoad } from "@/utils";

export const ListItem = lazyLoad(
  () => import("./ListItem"),
  (module) => module.ListItem
);
