import { StorageLink } from "src/features/StorageLink/publicApi.ts";
import { LinksStyle } from "./LinksStyle.ts";
import { DownloadProjection } from "src/features/DownloadProjection/publicApi.ts";

export const Links = () => {
  return (
    <>
      <SegmentWrapperSC>
        <StorageLink />
      </SegmentWrapperSC>
      <SegmentWrapperSC>
        <DownloadProjection />
      </SegmentWrapperSC>
    </>
  );
};

const { SegmentWrapperSC } = LinksStyle();
