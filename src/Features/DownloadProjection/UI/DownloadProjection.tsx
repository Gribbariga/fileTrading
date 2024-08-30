import { Badge, Switch, Text } from "@radix-ui/themes";
import { DownloadProjectionStyle } from "./DownloadProjectionStyle.ts";
import { useState } from "react";

export const DownloadProjection = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <TopWrapperSC>
        <TitleWrapperSC>
          <Text align={"left"} highContrast={true} size={"3"} weight={"medium"}>
            Защита при скачивании
          </Text>
          <Badge size={"1"} variant="soft" highContrast={false} />
        </TitleWrapperSC>
        <Switch
          size={"3"}
          variant={"surface"}
          highContrast={false}
          checked={isChecked}
          onClick={() => setIsChecked((prev) => !prev)}
        />
      </TopWrapperSC>
      <Text align={"left"} highContrast={false} size={"1"} weight={"regular"}>
        Скачанные файлы будут защищены паролем. Пароль будет показываться
        получателю один раз
      </Text>
    </>
  );
};

const { TopWrapperSC, TitleWrapperSC } = DownloadProjectionStyle();
