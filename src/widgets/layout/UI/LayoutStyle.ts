import { headerDesktopHeight } from "src/shared/constant/headerSize";
import styled from "styled-components";

const MainWindowsSC = styled("div")<{ $screenHeight: number }>`
  height: ${({ $screenHeight }) => `${$screenHeight - headerDesktopHeight}px`};
  width: 100%;
  background: url("/Background.webp");
  background-size: cover; /* Для адаптации изображения по размеру элемента */
  background-repeat: no-repeat; /* Чтобы избежать повторения изображения */
  background-position: center;
`;

export const LayoutStyle = () => ({ MainWindowsSC });
