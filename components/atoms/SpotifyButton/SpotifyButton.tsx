import { useStyle } from "@/hooks";
import { FC, ComponentProps, forwardRef, ButtonHTMLAttributes } from "react";

import * as S from "./SpotifyButton.styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: "dark" | "light" | "transparent";
}

export const SpotifyButton: FC<ButtonProps> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ buttonType = "light", className, children, ...props }, ref) => {
  const { getClassnames } = useStyle();

  const styleConfig = {
    dark: "bg-black text-white",
    light: "bg-white text-black",
    transparent: "bg-transparent text-neutral-300 font-medium",
  };

  return (
    <S.ButtonWrapper
      className={getClassnames(
        `spotify-button bg-green-500 text-black font-bold border border-transparent rounded-full w-full flex justify-center items-center hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50 transition ${styleConfig[buttonType]}`,
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </S.ButtonWrapper>
  );
});

SpotifyButton.displayName = "SpotifyButton";
