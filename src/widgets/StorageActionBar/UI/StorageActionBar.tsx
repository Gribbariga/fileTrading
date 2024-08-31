import { Heading } from "@radix-ui/themes";
import { StorageActionBarStyle } from "./StorageActionBarStyle.ts";
import { ShareStorage } from "src/features/ShareStorage/publicApi.ts";
import { DownloadAll } from "src/features/DownloadAll/publicApi.ts";
import { UploadsFile } from "src/features/UploadsFile/publicApi.ts";
import { storageSlice } from "src/entities/storage/modal/storageSlice.ts";

export const StorageActionBar = () => {
  const { storage, isGuest } = storageSlice((state) => state);

  return (
    <StorageActionBarWrapperSC>
      <Heading size={"6"} weight={"medium"} align={"left"}>
        Хранилище {storage?.folder_name}
      </Heading>
      <ActionWrapperSC>
        <ShareStorage />
        <DownloadAll />
        {!isGuest && (
          <>
            <UploadsFile />
          </>
        )}
      </ActionWrapperSC>
    </StorageActionBarWrapperSC>
  );
};

const { ActionWrapperSC, StorageActionBarWrapperSC } = StorageActionBarStyle();
