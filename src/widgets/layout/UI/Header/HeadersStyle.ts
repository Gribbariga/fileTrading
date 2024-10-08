import styled from "styled-components";
import { headerDesktopHeight } from "../../../../shared/constant/headerSize";
import { IconButtonUI } from "shared/IconButtonUI/IconButtonUI";

const HeaderSC = styled("header")`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${`${headerDesktopHeight}px`};
  padding: 20px 25px 20px 20px;
  background-color: var(--Colors-Default-white);
`;

const MenuWrapperSC = styled("div")`
  max-width: 140px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IcomButtonSC = styled(IconButtonUI)`
  cursor: pointer;
`;

export const HeaderStyle = () => ({
  HeaderSC,
  IcomButtonSC,
  MenuWrapperSC,
});
