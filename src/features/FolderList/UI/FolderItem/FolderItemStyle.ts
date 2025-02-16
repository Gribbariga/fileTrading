import { Link } from "react-router-dom";
import { mediaMaxQuery } from "src/shared/lib/helper/mediaMaxQuery/mediaMaxQuery";
import { MOBILE } from "src/shared/constant/screenSize";
import styled from "styled-components";
import { Text } from "@radix-ui/themes";

const CardSC = styled(Link)`
  display: block;
  text-decoration: none;
  color: #000;
  /* width: 100%; */
  display: flex;
  padding: var(--space-3);
  align-items: center;
  align-self: stretch;
  border-bottom: 1px solid var(--gray-a6);
  background: #fff;
  height: 72px;
`;

const SegmentWrapperSC = styled("div")`
  width: 25%;
  ${mediaMaxQuery(MOBILE)} { 
    width: 100%;
  }
`;

const NameAndImgWrapperSC = styled("div")`
  display: flex;
  align-items: center;
  gap: var(--space-4);
  
  ${mediaMaxQuery(MOBILE)} { 
    width: 100%;
  }
`;

const NameWrapperSC = styled("div")`
  ${mediaMaxQuery(MOBILE)} { 
    display: flex;
    flex-direction: column;
  }
`;

const TextSC = styled(Text)`
  color: #000000;
  opacity: 0.61;
`



export const FolderItemStyle = () => ({
  TextSC,
  CardSC,
  NameWrapperSC,
  SegmentWrapperSC,
  NameAndImgWrapperSC,
});
