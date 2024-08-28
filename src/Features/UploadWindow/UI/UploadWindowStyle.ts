import { headerDesktopHeight } from "shared/constant/headerSize";
import { ZIndexEight, ZIndexNine } from "shared/constant/z-index";
import styled from "styled-components";

const DropZoneSC = styled("div")`
  position: fixed;
  top: ${`${headerDesktopHeight}px`};
  left: 0;
  bottom: 0;
  right: 0;
  width: ${`${window.innerWidth}px`};
  height: ${`${window.innerHeight}px`};
  z-index: ${ZIndexEight};
`;

const InputSC = styled("input")`
  width: ${`${window.innerWidth}px`};
  height: ${`${window.innerHeight}px`};
  opacity: 0;
`;

const WindowWrapperSC = styled("div")`
  display: flex;
  max-width: 346px;
  padding: var(--Spacing-3) var(--Spacing-5);
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: var(--Spacing-3);
  flex-shrink: 0;
  border-radius: 8px;

  border: 1px solid var(--Colors-Neutral-Neutral-Alpha-3);
  background: var(--color-panel-solid);
  /* Shadows/shadow-5 */
  box-shadow: 0px 12px 32px -16px var(--Colors-Neutral-Neutral-Alpha-5),
    0px 12px 60px 0px var(--Overlays-Black-Alpha-3);
  z-index: ${ZIndexNine};
`;

const FileUploadBaseSC = styled("div")`
  display: flex;
  padding: var(--spacing-xl) var(--spacing-3xl);
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xs);
  align-self: stretch;
  border-radius: var(--Radius-3-max);
  border: 1.5px solid var(--Colors-Accent-Accent-9);
`;

const DownloadSC = styled("div")`
  display: flex;
  width: 40px;
  height: 40px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: var(--radius-md);
  border: 1px solid var(--Colors-Neutral-Neutral-Alpha-4);
  background: var(--Overlays-White-Alpha-7);
  /* Shadows/shadow-xs */
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  margin-bottom: 12px;
`;

export const UploadWindowStyle = () => ({
  InputSC,
  DropZoneSC,
  DownloadSC,
  WindowWrapperSC,
  FileUploadBaseSC,
});
