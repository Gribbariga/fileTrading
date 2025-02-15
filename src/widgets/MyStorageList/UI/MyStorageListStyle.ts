import { mediaMaxQuery } from "src/shared/lib/helper/mediaMaxQuery/mediaMaxQuery";
import { MOBILE } from "src/shared/constant/screenSize";
import styled from "styled-components";

const HeaderSC = styled("div")`
  /* width: 100%; */
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--space-4);
  ${mediaMaxQuery(MOBILE)} {
    padding: 0 16px;
    align-items: center;
  }
`;

export const MyStorageListStyle = () => ({ HeaderSC });
