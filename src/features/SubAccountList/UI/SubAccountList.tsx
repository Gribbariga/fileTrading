import { SubAccountItem } from "./SubAccountItem/SubAccountItem.tsx";
import { SubAccountListStyle } from "./SubAccountListStyle.ts";

export const SubAccountList = () => {
  const placeholder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <>
      <WrapperSC>
        {placeholder.map((item) => {
          return (
            <>
              <SubAccountItem key={item} number={item} />
            </>
          );
        })}
      </WrapperSC>
    </>
  );
};

const { WrapperSC } = SubAccountListStyle();
