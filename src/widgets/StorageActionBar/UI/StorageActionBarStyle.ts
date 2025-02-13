import { mediaMaxQuery } from "src/shared/lib/helper/mediaMaxQuery/mediaMaxQuery";
import { MOBILE } from "src/shared/constant/screenSize";
import styled from "styled-components";

const StorageActionBarWrapperSC = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 5px 0;
  height: 60px;
  margin-bottom: var(--space-4);
  ${mediaMaxQuery(MOBILE)} {
    height: 90px;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    padding-top: 0;
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
