import { Badge, Text } from "@radix-ui/themes";
import { StorageConfigStyle } from "./StorageConfigStyle.ts";
import { StorageName } from "src/features/StorageName/PublicApi.ts";
import { StorageLifeTimeChange } from "src/features/StorageLifeTimeChange/publicApi.ts";
import { StoragePassword } from "src/features/StoragePassword/publicApi.ts";

export const StorageConfig = () => {
  return (
    <>
      <SegmentWrapperSC>
        <TitleWrapperSC>
          <Text>Название хранилища</Text>
          <Badge>Premium</Badge>
        </TitleWrapperSC>
        <StorageName />
      </SegmentWrapperSC>
      <SegmentWrapperSC>
        <TitleWrapperSC>
          <Text>Срок хранения</Text>
          <Badge>Premium</Badge>
        </TitleWrapperSC>
        <Text>
          Укажите срок жизни хранилища. После указанного времени файлы сгорят.
        </Text>
        <StorageLifeTimeChange />
      </SegmentWrapperSC>
      <SegmentWrapperSC>
        <StoragePassword />
      </SegmentWrapperSC>
    </>
  );
};

const { TitleWrapperSC, SegmentWrapperSC } = StorageConfigStyle();
