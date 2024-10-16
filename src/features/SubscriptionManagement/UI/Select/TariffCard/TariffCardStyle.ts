import styled from "styled-components";

const TariffCardWrapperSC = styled("div")<{ isProfitable: boolean }>`
  max-width: 285px;
  width: 34%;
  padding: var(--space-5);
  border-radius: 16px;
  border: 2px solid
    ${({ isProfitable }) =>
      isProfitable
        ? `var(--accent-9)`
        : "var(--Colors-Neutral-Neutral-Alpha-6, rgba(0, 0, 0, 0.15))"};
  background: rgba(255, 255, 255, 0.9);
  position: relative;
`;

const TariffCardHeaderSC = styled("div")`
  display: flex;
  gap: 10px;
`;

const BadgeWrapperSC = styled("div")`
  position: absolute;
  top: var(--space-5);
  right: var(--space-5);
`;

const FeatureListSC = styled("ul")`
  margin-bottom: var(--space-5);
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FeatureListItemSC = styled("li")`
  display: flex;
  gap: var(--space-2);
`;

const IconWrapperSC = styled("div")`
  & > svg {
    width: 16px;
    height: 16px;
  }
`;

export const TariffCardStyle = () => ({
  IconWrapperSC,
  FeatureListSC,
  BadgeWrapperSC,
  FeatureListItemSC,
  TariffCardHeaderSC,
  TariffCardWrapperSC,
});
