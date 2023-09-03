"use client";

import { MyUserContextProvider } from "@/hooks";
import { FC, ReactNode } from "react";

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
  return <MyUserContextProvider>{children}</MyUserContextProvider>;
};
