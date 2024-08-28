import { Heading } from "@radix-ui/themes";
import { StorageActionBarStyle } from "./StorageActionBarStyle.ts";
import { ShareStorage } from "src/Features/ShareStorage/publicApi.ts";
import { DownloadAll } from "src/Features/DownloadAll/publicApi.ts";
import { UploadsFile } from "src/Features/UploadsFile/publicApi.ts";

export const StorageActionBar = () => {
  return (
    <StorageActionBarWrapperSC>
      <Heading size={"6"} weight={"medium"} align={"left"}></Heading>
      <ActionWrapperSC>
        <ShareStorage />
        <DownloadAll />
        <UploadsFile />
      </ActionWrapperSC>
    </StorageActionBarWrapperSC>
  );
};

const { ActionWrapperSC, StorageActionBarWrapperSC } = StorageActionBarStyle();
