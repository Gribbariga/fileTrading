import { StorageLink } from "src/Features/StorageLink/publicApi.ts";
import { LinksStyle } from "./LinksStyle.ts";
import { DownloadProjection } from "src/Features/DownloadProjection/publicApi.ts";

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
