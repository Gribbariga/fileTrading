import { ClockIcon } from "@radix-ui/react-icons";
import { StorageHeaderStyle } from "./StorageHeaderStyle.ts";
import { Text } from "@radix-ui/themes";
import { ExtendStorage } from "src/Features/ExtendStorage/publicApi.ts";

export const StorageHeader = () => {
  return (
    <StorageHeaderSC>
      <InfoWrapperSC>
        <ClockIcon />
        <TimeStorageSC>
          <Text
            size={"1"}
            weight={"regular"}
            align={"left"}
            highContrast={false}
          >
            Срок хранения
          </Text>
          <Text
            size={"5"}
            weight={"medium"}
            align={"left"}
            highContrast={true}
          ></Text>
        </TimeStorageSC>
      </InfoWrapperSC>
      <ExtendStorage />
    </StorageHeaderSC>
  );
};

const { TimeStorageSC, InfoWrapperSC, StorageHeaderSC } = StorageHeaderStyle();
