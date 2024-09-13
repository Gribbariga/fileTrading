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
    console.log(document.documentElement.scrollHeight);
    window.addEventListener("resize", () => {
      setHeight(document.documentElement.scrollHeight);
    });

    setHeight(document.documentElement.scrollHeight);
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
