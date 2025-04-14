import { Heading } from "@radix-ui/themes";
import { StorageActionBarStyle } from "./StorageActionBarStyle.ts";
import { ShareStorage } from "src/features/ShareStorage/publicApi.ts";
import { DownloadAll } from "src/features/DownloadAll/publicApi.ts";
import { UploadsFile } from "src/features/UploadsFile/publicApi.ts";
import { storageSlice } from "src/entities/storage/model/storageSlice.ts";
import { DeleteFolder } from "src/features/DeleteFolder/UI/DeleteFolder.tsx";
import { StorageModal } from "src/features/StorageModal/PublicApi.ts";
import { useResize } from "src/shared/lib/hooks/useResize/useResize.ts";

export const StorageActionBar = () => {
  const { storage, isGuest } = storageSlice((state) => state);
  const { isMobile } = useResize();
  return (
    <StorageActionBarWrapperSC>
      <HeadingAndButtonSC>
        <Heading size={isMobile ? "5" : "6"} weight={"medium"} align={"left"}>
          Хранилище {storage?.name}
        </Heading>
        {isMobile && <StorageModal />}
      </HeadingAndButtonSC>

      <ActionWrapperSC>
        {!isGuest && (
          <>
            <DeleteFolder />
          </>
        )}
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

const { ActionWrapperSC, StorageActionBarWrapperSC, HeadingAndButtonSC } =
  StorageActionBarStyle();
