import { FC, ReactNode, useEffect, useState } from "react";
import { Header } from "./Header/Header";
import { Container } from "shared/lib/Container/Container";
import { LayoutStyle } from "./LayoutStyle";

interface ILayoutProps {
  children: ReactNode;
  isContentCenter?: boolean;
  isHiddenHeaders?: boolean;
}

export const Layout: FC<ILayoutProps> = ({
  children,
  isContentCenter = false,
  isHiddenHeaders = false,
}) => {
  const [documentHeight, setDocumentHeight] = useState(
    document.body.scrollHeight
  );

  useEffect(() => {
    const handleResize = () => {
      setDocumentHeight(document.body.scrollHeight);
    };

    // Добавляем слушатель события изменения размера окна
    window.addEventListener("resize", handleResize);

    // Удаляем слушатель события при размонтировании компонента
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {!isHiddenHeaders && (
        <>
          <Header />
        </>
      )}
      <MainWindowsSC
        $isContentCenter={isContentCenter}
        $isHiddenHeaders={isHiddenHeaders}
        $screenHeight={documentHeight}
      >
        <Container>{children}</Container>
      </MainWindowsSC>
    </>
  );
};

const { MainWindowsSC } = LayoutStyle();
