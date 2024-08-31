import { headerDesktopHeight } from "shared/constant/headerSize";
import { ZIndexEight, ZIndexNine } from "shared/constant/z-index";
import styled from "styled-components";

const UploadWrapperSC = styled("div")<{ $screenHeight: number }>`
  width: 100%;
  height: ${({ $screenHeight }) => `${$screenHeight - headerDesktopHeight}px`};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const DropZoneSC = styled("div")<{
  $screenHeight: number;
  $screenWidth: number;
}>`
  position: absolute;
  top: ${`${headerDesktopHeight}px`};
  left: 0;
  width: ${({ $screenWidth }) => `${$screenWidth}px`};
  height: ${({ $screenHeight }) => `${$screenHeight - headerDesktopHeight}px`};
  z-index: ${ZIndexEight};
`;

const InputSC = styled("input")<{
  $screenHeight: number;
  $screenWidth: number;
}>`
  width: ${({ $screenWidth }) => `${$screenWidth}px`};
  height: ${({ $screenHeight }) => `${$screenHeight - headerDesktopHeight}px`};
  opacity: 0;
`;

const FileUploadInputSC = styled("input")`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
`;

const WindowWrapperSC = styled("div")`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  max-width: 346px;
  padding: var(--space-5) var(--space-5);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--space-3);
  flex-shrink: 0;
  border-radius: 8px;

  border: 1px solid var(--gray-a3);
  background: var(--color-panel-solid);

  box-shadow: var(--shadow-5);
  z-index: ${ZIndexNine};
`;

const FileUploadBaseSC = styled("div")`
  position: relative;
  display: flex;
  padding: var(--space-4, 16px) var(--space-5, 24px);
  flex-direction: column;
  align-items: center;
  gap: var(--space-3, 4px);
  align-self: stretch;
  border-radius: var(--radius-3, 6px);
  border: 1.5px solid var(--Colors-Accent-Accent-9, #f76b15);
`;
const DownloadSC = styled("div")`
  display: flex;
  width: 40px;

  height: 40px;

  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: var(--radius-4, 8px);
  border: 1px solid var(--Colors-Neutral-Neutral-Alpha-4, rgba(0, 0, 0, 0.09));
  background: var(--Overlays-White-Alpha-7, rgba(255, 255, 255, 0.5));
  /* Shadows/shadow-xs */
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
`;

export const UploadWindowStyle = () => ({
  InputSC,
  DropZoneSC,
  DownloadSC,
  UploadWrapperSC,
  WindowWrapperSC,
  FileUploadBaseSC,
  FileUploadInputSC,
});
