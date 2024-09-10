import { Heading } from "@radix-ui/themes";
import { MyStorageListStyle } from "./MyStorageListStyle.ts";
import { FolderList } from "src/features/FolderList/publicApi.ts";
import { BreadCrumbs } from "src/features/BreadCrumbs/UI/BreadCrumbs.tsx";
import { CreateFolder } from "src/features/CreateFolder/UI/CreateFolder.tsx";

export const MyStorageList = () => {
  return (
    <>
      <BreadCrumbs />
      <HeaderSC>
        <Heading size="6" weight={"medium"} align={"left"}>
          Мои хранилища
        </Heading>
        <CreateFolder />
      </HeaderSC>
      <FolderList />
    </>
  );
};

const { HeaderSC } = MyStorageListStyle();
