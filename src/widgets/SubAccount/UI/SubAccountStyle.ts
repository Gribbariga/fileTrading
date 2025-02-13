import { mediaMaxQuery } from "src/shared/lib/helper/mediaMaxQuery/mediaMaxQuery";
import { LAPTOP, MOBILE } from "src/shared/constant/screenSize";
import styled from "styled-components";

const TitleWrapperSC = styled("div")`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-5);
  ${mediaMaxQuery(MOBILE)} {
    flex-direction: column;
    align-items: flex-start;
    max-width: 361px;
    margin-left: 16px;
    margin-top: 24px;
    gap: 24px;
  }
  ${mediaMaxQuery(LAPTOP)}{
    padding: 0 5px;
  }
`;

export const SubAccountStyle = () => ({ TitleWrapperSC });
