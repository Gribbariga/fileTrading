import { Card } from "@radix-ui/themes";
import { mediaMaxQuery } from "src/shared/lib/helper/mediaMaxQuery/mediaMaxQuery";
import { MOBILE } from "src/shared/constant/screenSize";
import styled from "styled-components";

const RegisterWrapperSC = styled(Card)`
  max-width: 400px;
  width: 100%;
  ${mediaMaxQuery(MOBILE)} {
    max-width: 361px;
  }
`;

export const RegisterFormStyle = () => ({ RegisterWrapperSC });
