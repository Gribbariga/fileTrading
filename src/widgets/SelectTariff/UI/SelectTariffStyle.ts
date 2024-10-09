import { IconButtonUI } from "src/shared/IconButtonUI/IconButtonUI";
import styled from "styled-components";

const SelectTariffWrapperSC = styled("div")`
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
  margin: 0 auto;
`;

const IconButtonSC = styled(IconButtonUI)`
  position: absolute;
  top: var(--space-6);
  right: var(--space-6);
`;

export const SelectTariffStyle = () => ({
  IconButtonSC,
  SelectTariffWrapperSC,
});
