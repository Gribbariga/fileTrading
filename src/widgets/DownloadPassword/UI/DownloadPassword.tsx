import { Heading, IconButton, Text, TextField } from "@radix-ui/themes";
import { DownloadPasswordStyle } from "./DownloadPasswordStyle.ts";
import { CopyIcon } from "@radix-ui/react-icons";
import { ButtonUI } from "src/shared/ButtonUI/ButtonUI.tsx";
import { storageSlice } from "src/entities/storage/model/storageSlice.ts";

export const DownloadPassword = () => {
  const { downloadPassword } = storageSlice((state) => state);

  return (
    <WrapperSC>
      <Heading
        size={"5"}
        weight={"bold"}
        align={"left"}
        highContrast={true}
        mb={"3"}
      >
        Скопируйте пароль
      </Heading>
      <Text
        mb={"4"}
        size={"3"}
        weight={"regular"}
        align={"left"}
        highContrast={true}
      >
        Создатель хранилища установил защиту скачиваемых файлов. Воспользуйтесь
        этим паролем, чтобы открыть архив.
      </Text>
      <TextFieldSC
        readOnly={true}
        value={downloadPassword}
        mb={"4"}
        size={"3"}
        variant="surface"
      >
        <TextField.Slot side="right">
          <IconButton>
            <CopyIcon height="16" width="16" />
          </IconButton>
        </TextField.Slot>
      </TextFieldSC>
      <ButtonUI size={"3"} highContrast={false} variant="solid">
        Продолжить
      </ButtonUI>
    </WrapperSC>
  );
};

const { TextFieldSC, WrapperSC } = DownloadPasswordStyle();
