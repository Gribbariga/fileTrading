import { TextField } from "@radix-ui/themes";
import styled from "styled-components";

const WrapperSC = styled("div")`
  display: flex;
  max-width: 361px;
  width: 100%;
  padding: var(--space-5);
  flex-direction: column;
  align-items: flex-end;
  gap: var(--space-4);
  border-radius: var(--Radius-5, 12px);
  border: 1px solid var(--Colors-Neutral-Neutral-Alpha-6, rgba(0, 0, 0, 0.15));
  background: var(--color-panel-solid);
  /* Shadows/shadow-3 */
  box-shadow: 0px 4px 16px -8px var(--black-a2),
    0px 3px 12px -4px var(--black-a2), 0px 2px 3px -2px var(--gray-a3);
`;

const TextFieldSC = styled(TextField.Root)`
  width: 100%;
`;

export const DownloadPasswordStyle = () => ({ TextFieldSC, WrapperSC });
