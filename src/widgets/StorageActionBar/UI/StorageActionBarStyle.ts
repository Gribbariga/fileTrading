import { mediaMaxQuery } from "src/shared/lib/helper/mediaMaxQuery/mediaMaxQuery";
import { MOBILE } from "src/shared/constant/screenSize";
import styled from "styled-components";

const StorageActionBarWrapperSC = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 20px;
  /* height: 60px;   */
  margin-bottom: var(--space-4);
  ${mediaMaxQuery(MOBILE)} {
    /* height: 90px; */
    flex-direction: column;
    align-items: flex-start;
    padding: 0 16px 0 0;
    gap: 12px;
  }
`;

const ActionWrapperSC = styled("div")`
  /* max-width: 358px;
  width: 100%; */
  gap: 20px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mediaMaxQuery(MOBILE)} {
    gap: 12px;
    flex-wrap: wrap;
    justify-content: start;
  }
`;
const HeadingAndButtonSC = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mediaMaxQuery(MOBILE)} {
    width: 100%;
  }
`;

export const StorageActionBarStyle = () => ({
  ActionWrapperSC,
  HeadingAndButtonSC,
  StorageActionBarWrapperSC,
});
