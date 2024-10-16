import { headerDesktopHeight } from "src/shared/constant/headerSize";
import styled from "styled-components";

const MainWindowsSC = styled("div")<{
  $screenHeight: number;
  $isContentCenter?: boolean;
  $isHiddenHeaders?: boolean;
  $isButton?: boolean;
}>`
  min-height: ${({ $isHiddenHeaders, $isButton }) =>
    `calc(100vh - ${$isHiddenHeaders ? 0 : headerDesktopHeight}px - ${
      $isButton ? 40 : 0
    }px)`};

  ${({ $isContentCenter }) => {
    if ($isContentCenter) {
      return `
        display:flex;
        jusctify-content:center;
        align-items:center;
      `;
    }
  }}
`;

export const LayoutStyle = () => ({ MainWindowsSC });
