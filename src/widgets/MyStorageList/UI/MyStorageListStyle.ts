import { mediaMaxQuery } from "src/shared/lib/helper/mediaMaxQuery/mediaMaxQuery";
import { MOBILE } from "src/shared/constant/screenSize";
import styled from "styled-components";
import { Heading } from "@radix-ui/themes";

const WrapperSC = styled("div")`
  ${mediaMaxQuery(MOBILE)} {
    padding: 0 16px;
  }
`;

const HeaderSC = styled("div")`
  /* width: 100%; */
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--space-4);
  ${mediaMaxQuery(MOBILE)} {
    align-items: center;
  }
`;

const HeadingSC = styled(Heading)`
  ${mediaMaxQuery(MOBILE)} {
    font-size: 18px;
  }
`;

export const MyStorageListStyle = () => ({ HeadingSC, HeaderSC, WrapperSC });
