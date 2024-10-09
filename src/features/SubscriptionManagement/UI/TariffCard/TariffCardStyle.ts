import styled from "styled-components";

const TariffCardWrapperSC = styled("div")`
  max-width: 285px;
  width: 32%;
  display: flex;
  padding: var(--space-5);
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  border: 2px solid var(--accent-9);
  background: rgba(255, 255, 255, 0.9);
  position: relative;
`;

const TariffCardHeaderSC = styled("div")`
  display: flex;
  gap: 10px;
`;

const BadgeWrapperSC = styled("div")`
  position: absolute;
  top: 0;
  right: 0;
`;

const FeatureListSC = styled("ul")`
  margin-bottom: var(--space-5);
`;

const FeatureListItemSC = styled("li")`
  display: flex;
  gap: var(--space-2);
`;

export const TariffCardStyle = () => ({
  FeatureListSC,
  BadgeWrapperSC,
  FeatureListItemSC,
  TariffCardHeaderSC,
  TariffCardWrapperSC,
});
