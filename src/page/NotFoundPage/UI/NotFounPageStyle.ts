import { headerDesktopHeight } from "shared/constant/headerSize";
import styled from "styled-components";

const WrapperSC = styled("div")<{ $screenHeight: number }>`
  height: ${({ $screenHeight }) => `${$screenHeight - headerDesktopHeight}px`};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapperSC = styled("div")`
  border-radius: var(--radius-3);
  border: 1px solid var(--gray-a3);
  background: var(--color-panel-solid);
  /* Shadows/shadow-4 */
  box-shadow: 0px 12px 32px -16px var(--gray-a3),
    0px 8px 40px 0px var(--black-a3);

  display: inline-flex;
  padding: var(--space-3, 12px) var(--space-5, 24px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text404SC = styled("span")`
  color: var(--accent-9);
  text-align: center;
  /* Typography/9/Bold */
  font-family: var(--Typography-Font-family-text, "SF Pro Display");
  font-size: var(--Typography-Font-size-9, 60px);
  font-style: normal;
  font-weight: 700;
  line-height: var(--Typography-Line-height-9, 60px); /* 100% */
  letter-spacing: var(--Typography-Letter-spacing-9, -0.4px);
`;

const NotFoundTextSC = styled("span")`
  color: #202020;
  /* Typography/2/Regular */
  font-family: var(--Typography-Font-family-text, "SF Pro Display");
  font-size: var(--Typography-Font-size-2, 14px);
  font-style: normal;
  font-weight: 400;
  line-height: var(--Typography-Line-height-2, 20px); /* 142.857% */
  letter-spacing: var(--Typography-Letter-spacing-2, 0px);
`;

export const NotFounPageStyle = () => ({
  Text404SC,
  WrapperSC,
  NotFoundTextSC,
  ContentWrapperSC,
});
