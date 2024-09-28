import { CreateSubAccount } from "src/features/CreateSubAccount/publickApi.ts";
import { SubAccountStyle } from "./SubAccountStyle.ts";
import { Heading } from "@radix-ui/themes";
import { BreadCrumbs } from "src/features/BreadCrumbs/UI/BreadCrumbs.tsx";
import { SubAccountList } from "src/features/SubAccountList/publickApi.ts";
import { useState } from "react";

export const SubAccount = () => {
  const [isCreate, setIsCreate] = useState(false);

  const handleStartCreate = () => {
    if (!isCreate) {
      setIsCreate(true);
    }
  };

  const handleCanselCreate = () => {
    setIsCreate(false);
  };

  return (
    <>
      <BreadCrumbs />

      <TitleWrapperSC>
        <Heading size={"6"} weight={"medium"}>
          Корпоративные аккаунты
        </Heading>
        <CreateSubAccount handleCreate={handleStartCreate} />
      </TitleWrapperSC>
      <SubAccountList
        handleCanselCreate={handleCanselCreate}
        isCreate={isCreate}
      />
    </>
  );
};

const { TitleWrapperSC } = SubAccountStyle();
