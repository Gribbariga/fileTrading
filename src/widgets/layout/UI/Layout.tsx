import { FC, ReactNode, useEffect, useState } from "react";
import { Header } from "./Header/Header";
import { Container } from "shared/lib/Container/Container";
import { LayoutStyle } from "./LayoutStyle";
import { styled } from "styled-components";
import { ButtonUI } from "src/shared/ButtonUI/ButtonUI";
import { HomeIcon } from "@radix-ui/react-icons";

interface ILayoutProps {
  children: ReactNode;
  isContentCenter?: boolean;
  isHiddenHeaders?: boolean;
  navButton?: {
    text: string;
    handleClick: () => void;
  };
}

export const Layout: FC<ILayoutProps> = ({
  children,
  navButton,
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
  console.log(isHiddenHeaders);
  return (
    <>
      {!isHiddenHeaders && (
        <>
          <Header />
        </>
      )}
      {navButton && (
        <>
          <NavWrapperSC>
            <NavContainerSC>
              <ButtonUI
                onClick={navButton.handleClick}
                color="gray"
                style={{ width: "148px" }}
                size={"2"}
                variant="ghost"
              >
                <HomeIcon />
                {navButton.text}
              </ButtonUI>
            </NavContainerSC>
          </NavWrapperSC>
        </>
      )}

      <MainWindowsSC
        $isContentCenter={isContentCenter}
        $isHiddenHeaders={isHiddenHeaders}
        $screenHeight={documentHeight}
        $isButton={!!navButton}
      >
        <Container>{children}</Container>
      </MainWindowsSC>
    </>
  );
};
const NavWrapperSC = styled("div")`
  width: 100%;
  padding: 8px 83px;
  background: var(--Colors-Neutral-Neutral-3, #f0f0f0);
`;

const NavContainerSC = styled("div")`
  max-width: 1357px;
  width: 100px;
`;

const { MainWindowsSC } = LayoutStyle();
