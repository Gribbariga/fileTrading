import { FC, ReactNode, useEffect, useState } from "react";
import { Header } from "./Header/Header";
import { Container } from "shared/lib/Container/Container";
import { LayoutStyle } from "./LayoutStyle";

interface ILayoutProps {
  children: ReactNode;
}

export const Layout: FC<ILayoutProps> = ({ children }) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", () => {
      const pageHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
      setHeight(pageHeight);
    });
  }, []);

  return (
    <>
      <Header />
      <MainWindowsSC $screenHeight={height}>
        <Container>{children}</Container>
      </MainWindowsSC>
    </>
  );
};

const { MainWindowsSC } = LayoutStyle();
