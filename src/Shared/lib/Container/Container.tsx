import { FC, ReactNode } from "react";
import { ContainerSC } from "./ContainerStyle";

interface IContainerProps {
  children: ReactNode;
}

export const Container: FC<IContainerProps> = ({ children }) => {
  return (
    <>
      <ContainerSC>{children}</ContainerSC>
    </>
  );
};
