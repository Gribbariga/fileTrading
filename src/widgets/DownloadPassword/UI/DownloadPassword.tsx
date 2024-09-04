import { Heading, Text } from "@radix-ui/themes";
import { DownloadPasswordStyle } from "./DownloadPasswordStyle.ts";
import { CopyIcon } from "@radix-ui/react-icons";
import { ButtonUI } from "src/shared/ButtonUI/ButtonUI.tsx";
import { storageSlice } from "src/entities/storage/model/storageSlice.ts";
import { copyToClipboard } from "src/shared/lib/helper/copyToClipboard/copyToClipboard.ts";

export const DownloadPassword = () => {
  const { downloadPassword, setDownloadPassword } = storageSlice(
    (state) => state
  );

  const handleNext = () => {
    setDownloadPassword(undefined);
  };

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
        <TextFieldSlotSC
          onClick={() => copyToClipboard(downloadPassword || "")}
          side="right"
        >
          <CopyIcon height="16" width="16" />
        </TextFieldSlotSC>
      </TextFieldSC>
      <ButtonWrapperSC>
        <ButtonUI
          onClick={handleNext}
          size={"3"}
          highContrast={false}
          variant="solid"
        >
          Продолжить
        </ButtonUI>
      </ButtonWrapperSC>
    </WrapperSC>
  );
};

const { WrapperSC, TextFieldSC, ButtonWrapperSC, TextFieldSlotSC } =
  DownloadPasswordStyle();
