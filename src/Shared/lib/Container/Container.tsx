import { FC, ReactNode } from "react";
import { ContainerSC } from "./ContainerStyle";

interface IContainerProps {
  children: ReactNode;
  maxWidth: number;
}

export const Container: FC<IContainerProps> = ({ children, maxWidth }) => {
  return (
    <>
      <ContainerSC $maxWidth={maxWidth}>{children}</ContainerSC>
    </>
  );
};
