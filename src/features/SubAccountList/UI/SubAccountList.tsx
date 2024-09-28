import { FC, useEffect, useState } from "react";
import { SubAccountItem } from "./SubAccountItem/SubAccountItem.tsx";
import { SubAccountListStyle } from "./SubAccountListStyle.ts";
import { getAllSubaccount } from "src/shared/API/account/subaccount/subaccount.tsx";
import { ISubaccount } from "src/shared/API/account/subaccount/model.ts";

interface ISubAccountListProps {
  isCreate: boolean;
  handleCanselCreate: () => void;
}

export const SubAccountList: FC<ISubAccountListProps> = ({
  isCreate,
  handleCanselCreate,
}) => {
  const [subAccount, setSubAccount] = useState<ISubaccount[]>([]);

  useEffect(() => {
    getAllSubaccount().then(({ data }) => {
      setSubAccount(data.subaccounts);
    });
  }, []);

  return (
    <>
      <WrapperSC>
        {isCreate && (
          <SubAccountItem
            handleCanselCreate={handleCanselCreate}
            key={"create"}
            login={""}
            number={-1}
            isCreate={isCreate}
          />
        )}
        {subAccount.map((item, i) => {
          return (
            <>
              <SubAccountItem key={item.login} login={item.login} number={i} />
            </>
          );
        })}
      </WrapperSC>
    </>
  );
};

const { WrapperSC } = SubAccountListStyle();
