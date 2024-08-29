import React from "react";
import { ButtonSwapp } from "./styled";

interface SwapButtonProps {
  onSwap: () => void;
}

export const SwapButton: React.FC<SwapButtonProps> = ({ onSwap }) => {
  return (
    <ButtonSwapp onClick={onSwap} aria-label="Intercambiar monedas">
      ⇄
    </ButtonSwapp>
  );
};
