import { FC, ReactNode } from "react";
import { LayoutStyle } from "./LayoutStyle.ts";
import { Container } from "../../../Shared/Container/Container.tsx";
import { Header } from "./Header/Header.tsx";

interface ILayoutProps {
  children: ReactNode;
}

export const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <MainWindowsSC>
        <Container>{children}</Container>
      </MainWindowsSC>
    </>
  );
};

const { MainWindowsSC } = LayoutStyle();
