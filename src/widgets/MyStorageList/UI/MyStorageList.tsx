import { Heading } from "@radix-ui/themes";
import { MyStorageListStyle } from "./MyStorageListStyle.ts";
import { ButtonUI } from "src/shared/ButtonUI/ButtonUI.tsx";
import { FolderList } from "src/features/FolderList/publicApi.ts";

export const MyStorageList = () => {
  return (
    <>
      <HeaderSC>
        <Heading size="6" weight={"medium"} align={"left"}>
          Мои хранилища
        </Heading>
        <ButtonUI highContrast={false} size={"3"} variant="soft">
          Создать хранилище
        </ButtonUI>
      </HeaderSC>
      <FolderList />
    </>
  );
};

const { HeaderSC } = MyStorageListStyle();
