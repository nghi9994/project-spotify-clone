import { lazyLoad } from "@/utils";

export const SidebarItem = lazyLoad(
  () => import("./SidebarItem"),
  (module) => module.SidebarItem
);
