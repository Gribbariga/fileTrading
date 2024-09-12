import { CreateSubAccount } from "src/features/CreateSubAccount/publickApi.ts";
import { SubAccountStyle } from "./SubAccountStyle.ts";
import { Heading } from "@radix-ui/themes";
import { BreadCrumbs } from "src/features/BreadCrumbs/UI/BreadCrumbs.tsx";
import { SubAccountList } from "src/features/SubAccountList/publickApi.ts";

export const SubAccount = () => {
  return (
    <>
      <TitleWrapperSC>
        <BreadCrumbs />
        <Heading size={"6"} weight={"medium"}>
          Корпоративные аккаунты
        </Heading>
        <CreateSubAccount />
      </TitleWrapperSC>
      <SubAccountList />
    </>
  );
};

const { TitleWrapperSC } = SubAccountStyle();
