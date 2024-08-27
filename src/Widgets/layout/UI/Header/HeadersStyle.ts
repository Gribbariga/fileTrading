import styled from "styled-components";
import { headerDesktopHeight } from "../../../../Shared/constant/headerSize";

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

export const HeaderStyle = () => ({
  HeaderSC,
  MenuWrapperSC,
});
