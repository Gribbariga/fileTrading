import { FC, ReactNode, useEffect, useState } from "react";
import { Header } from "./Header/Header";
import { Container } from "shared/lib/Container/Container";
import { LayoutStyle } from "./LayoutStyle";
import { useResize } from "shared/lib/hooks/useResize/useResize";

interface ILayoutProps {
  children: ReactNode;
}

export const Layout: FC<ILayoutProps> = ({ children }) => {
  const { height, width } = useResize();
  const [fullPageHeight, setFullPageHeight] = useState(0);

  useEffect(() => {
    setFullPageHeight(document.body.scrollHeight);
  }, [height, width]);
  return (
    <>
      <Header />
      <MainWindowsSC screenHeight={fullPageHeight}>
        <Container>{children}</Container>
      </MainWindowsSC>
    </>
  );
};

const { MainWindowsSC } = LayoutStyle();
