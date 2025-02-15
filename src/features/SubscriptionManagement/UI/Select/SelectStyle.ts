import { SegmentedControl } from "@radix-ui/themes";
import { IconButtonUI } from "src/shared/IconButtonUI/IconButtonUI";
import { Text } from "@radix-ui/themes";
import { mediaMaxQuery } from "src/shared/lib/helper/mediaMaxQuery/mediaMaxQuery";
import { MOBILE } from "src/shared/constant/screenSize";
import styled from "styled-components";


const WrapperSC = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const TextWrapperSC = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--Spacing-1, 4px);
  margin-top: 58px;
  ${mediaMaxQuery(MOBILE)}{
    padding: 25px 16px 0;
    margin-top: 0;
  }
`;

const TextSC = styled(Text)`
  color: rgba(0, 0, 0, 0.61);
  text-align: center;
`;

const SegmentControlRootSC = styled(SegmentedControl.Root)`
  display: flex;
  max-width: 395px;
  width: 100%;
  height: 40px;
  ${mediaMaxQuery(MOBILE)}{
    width: 330px;
  }
`;

const SegmentControlItemSC = styled(SegmentedControl.Item)`
  height: 100%;
  cursor: pointer;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  width: 20%;
`;

const Test = styled(SegmentControlItemSC)`
  width: 208px;
`;

const FlexWrapperSC = styled("div")` 
  width: 100%; 
  display: flex; 
  justify-content: center; 
  overflow: visible; 
`; 
 
const TariffListSC = styled("div")` 
  max-width: 979px; 
  width: 100%; 
  overflow: visible; 
`; 
 
const TariffListWrapperSC = styled("div")` 
  display: flex; 
  gap: 10px; 
  &::-webkit-scrollbar { 
    width: 0px; /* ширина scrollbar */ 
  } 
  &::-webkit-scrollbar-track { 
    background: #fff; /* цвет дорожки */ 
  } 
  &::-webkit-scrollbar-thumb { 
    background: #fff; /* цвет плашки */ 
    border-radius: 20px; /* закругления плашки */ 
    border: 0cap solid orange; /* padding вокруг плашки */ 
  } 
  ${mediaMaxQuery(MOBILE)} { 
    overflow-x: ${"ontouchstart" in window ? "scroll" : "visible"}; 
  } 
`;

const SelectTariffWrapperSC = styled("div")<{ $transformXValue: number}>`
  position: relative;
  max-width: 927px;
  max-height: 690px;
  padding: var(--space-6);
  border-radius: var(--radius-5);
  border: 1px solid var(--gray-a3);
  background: #fff;
  /* Shadows/shadow-6 */
  box-shadow: 0px 16px 36px -20px var(--gray-a7, rgba(0, 0, 0, 0.19)),
    0px 16px 64px 0px var(--gray-a2, rgba(0, 0, 0, 0.02)),
    0px 12px 60px 0px var(--black-a3, rgba(0, 0, 0, 0.15));
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  transform: ${({ $transformXValue }) =>
    `translateX(${$transformXValue * -1}px)`};
    width: 100%;

  &::-webkit-scrollbar {
    width: 0px; /* ширина scrollbar */
  }
  &::-webkit-scrollbar-track {
    background: #fff; /* цвет дорожки */
  }
  &::-webkit-scrollbar-thumb {
    background: #fff; /* цвет плашки */
    border-radius: 20px; /* закругления плашки */
    border: 0cap solid orange; /* padding вокруг плашки */
  }
  ${mediaMaxQuery(MOBILE)} {
    overflow-x: ${"ontouchstart" in window ? "scroll" : "visible"};
  }
`;

const IconButtonSC = styled(IconButtonUI)`
  position: absolute;
  top: var(--space-6);
  right: var(--space-6);
`;

const SwitchWrapper = styled("div")`
  display: flex;
  gap: 10px;
  margin-bottom: var(--space-8);
`;

export const SelectStyle = () => ({
  Test,
  TextSC,
  WrapperSC,
  TariffListSC,
  IconButtonSC,
  SwitchWrapper,
  TextWrapperSC,
  FlexWrapperSC,
  TariffListWrapperSC,
  SegmentControlRootSC,
  SegmentControlItemSC,
  SelectTariffWrapperSC,
});