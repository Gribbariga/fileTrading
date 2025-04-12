import { MyStorageListStyle } from "./MyStorageListStyle.ts";
import { FolderList } from "src/features/FolderList/publicApi.ts";
import { BreadCrumbs } from "src/features/BreadCrumbs/UI/BreadCrumbs.tsx";
import { CreateFolder } from "src/features/CreateFolder/UI/CreateFolder.tsx";

export const MyStorageList = () => {
  return (
    <>
      <BreadCrumbs />
      <WrapperSC>
        <HeaderSC>
          <HeadingSC
            size={{
              initial: "5",
              md: "6",
              xl: "6",
            }}
            weight={"medium"}
            align={"left"}
          >
            Мои хранилища
          </HeadingSC>
          <CreateFolder />
        </HeaderSC>
        <FolderList />
      </WrapperSC>
    </>
  );
};

const { HeadingSC, HeaderSC, WrapperSC } = MyStorageListStyle();
