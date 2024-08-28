import { FC, ReactNode } from "react";
import { Header } from "./Header/Header";
import { Container } from "shared/lib/Container/Container";
import { LayoutStyle } from "./LayoutStyle";
import { useResize } from "shared/lib/hooks/useResize/useResize";

interface ILayoutProps {
  children: ReactNode;
}

export const Layout: FC<ILayoutProps> = ({ children }) => {
  const { height } = useResize();

  return (
    <>
      <Header />
      <MainWindowsSC screenHeight={height}>
        <Container>{children}</Container>
      </MainWindowsSC>
    </>
  );
};

const { MainWindowsSC } = LayoutStyle();
