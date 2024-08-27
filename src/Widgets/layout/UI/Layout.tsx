import { FC, ReactNode } from "react";
import { Header } from "./Header/Header";
import { Container } from "shared/Container/Container";
import { LayoutStyle } from "./LayoutStyle";

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
