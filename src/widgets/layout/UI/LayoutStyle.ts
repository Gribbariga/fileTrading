import { headerDesktopHeight } from "src/shared/constant/headerSize";
import styled from "styled-components";

const MainWindowsSC = styled("div")<{ $screenHeight: number }>`
  min-height: ${() => `calc(100vh - ${headerDesktopHeight}px)`};
`;

export const LayoutStyle = () => ({ MainWindowsSC });
