import { headerDesktopHeight } from "shared/constant/headerSize";
import { ZIndexEight, ZIndexNine } from "shared/constant/z-index";
import styled from "styled-components";

const UploadWrapperSC = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
  padding: var(--space-3) var(--space-5);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--space-3);
  flex-shrink: 0;
  border-radius: 8px;

  border: 1px solid var(--gray-a3);
  background: var(--color-panel-solid);
  /* Shadows/shadow-5 */
  box-shadow: 0px 12px 32px -16px var(--gray-a5),
    0px 12px 60px 0px var(--Overlays-Black-Alpha-3);
  z-index: ${ZIndexNine};
`;

const FileUploadBaseSC = styled("div")`
  display: flex;
  padding: var(--space-4, 16px) var(--space-5, 24px);
  flex-direction: column;
  align-items: center;
  gap: var(--space-1, 4px);
  align-self: stretch;
  border-radius: var(--Radius-3-max, 6px);
  border: 1.5px solid var(--Colors-Accent-Accent-9, #f76b15);
`;

const DownloadSC = styled("div")`
  display: flex;
  width: 40px;

  height: 40px;

  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: var(--Radius-4, 8px);
  border: 1px solid var(--Colors-Neutral-Neutral-Alpha-4, rgba(0, 0, 0, 0.09));
  background: var(--Overlays-White-Alpha-7, rgba(255, 255, 255, 0.5));
  /* Shadows/shadow-xs */
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
`;

const SpanSC = styled("span")`
  color: var(--accent-9) !important;
`;

export const UploadWindowStyle = () => ({
  SpanSC,
  InputSC,
  DropZoneSC,
  DownloadSC,
  UploadWrapperSC,
  WindowWrapperSC,
  FileUploadBaseSC,
});
