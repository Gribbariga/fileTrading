import styled from "styled-components";

const CardSC = styled("div")`
  max-width: 440px;
  width: 100%;
  border-radius: var(--Radius-5, 12px);
  border: 1px solid var(--Colors-Neutral-Neutral-Alpha-6, rgba(0, 0, 0, 0.15));
  background: var(--Panel-default, rgba(255, 255, 255, 0.8));
  /* Shadows/shadow-5 */
  box-shadow: 0px 12px 32px -16px var(--Colors-Neutral-Neutral-Alpha-5, rgba(0, 0, 0, 0.12)),
    0px 12px 60px 0px var(--Overlays-Black-Alpha-3, rgba(0, 0, 0, 0.15));
  padding: 32px 0;
  border-top: 10px solid var(--Colors-Accent-Accent-9, #f76b15);
`;

const LineSC = styled("div")`
  width: 100%;
  height: 1px;
  margin-bottom: 24px;
  background: var(--Colors-Neutral-Neutral-Alpha-6, rgba(0, 0, 0, 0.15));
`;

const ButtoGroupSC = styled("div")`
  display: flex;
  justify-content: space-between;
`;

const PaddingWrapperSC = styled("div")`
  padding: 0 32px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TransferStyle = () => ({
  LineSC,
  CardSC,
  ButtoGroupSC,
  PaddingWrapperSC,
});
