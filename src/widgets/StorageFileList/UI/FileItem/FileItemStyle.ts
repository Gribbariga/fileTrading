import { mediaMaxQuery } from "src/shared/lib/helper/mediaMaxQuery/mediaMaxQuery";
import { MOBILE } from "src/shared/constant/screenSize";
import styled from "styled-components";

const ItemWrapperSC = styled("div")`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  height: 72px;
  /* width: 100%; */
  padding: var(--space-3);
  align-items: center;
  align-self: stretch;
  border-bottom: 1px solid var(--gray-a6);
  background: white;
  ${mediaMaxQuery(MOBILE)} { 
    margin: 0 29px 22px 16px;
  }
`;

const TextWrapperSC = styled('div')`
  display: flex;
  flex-direction: column;
`;

const SegmentWrapperSC = styled("div")`
  max-width: 274px;
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  ${mediaMaxQuery(MOBILE)} { 
  }
`;


const IconWrapperSC = styled("div")`
  max-width: 10%;
  justify-content: space-around;
  width: 100%;
  display: flex;
`;

export const FileItemStyle = () => ({
  TextWrapperSC,
  IconWrapperSC,
  ItemWrapperSC,
  SegmentWrapperSC,
});
