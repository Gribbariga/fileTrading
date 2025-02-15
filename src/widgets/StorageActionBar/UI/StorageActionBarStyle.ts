import { mediaMaxQuery } from "src/shared/lib/helper/mediaMaxQuery/mediaMaxQuery";
import { MOBILE } from "src/shared/constant/screenSize";
import styled from "styled-components";

const StorageActionBarWrapperSC = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 20px;
  height: 60px;
  margin-bottom: 16px;
  ${mediaMaxQuery(MOBILE)} {
    height: 90px;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 16px;
    gap: 22px;
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
`;

export const StorageActionBarStyle = () => ({
  ActionWrapperSC,
  StorageActionBarWrapperSC,
});
