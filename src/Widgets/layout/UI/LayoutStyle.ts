import styled from "styled-components";
import { headerDesktopHeight } from "../../../Shared/constant/headerSize";

const MainWindowsSC = styled("div")`
  height: ${`${window.innerHeight - headerDesktopHeight}px`};
  width: 100%;
  background: url("/Background.webp");
  background-size: cover; /* Для адаптации изображения по размеру элемента */
  background-repeat: no-repeat; /* Чтобы избежать повторения изображения */
  background-position: center;
`;

export const LayoutStyle = () => ({ MainWindowsSC });
