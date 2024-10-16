import { CopyIcon } from "@radix-ui/react-icons";
import { Heading, IconButton, Text, TextField } from "@radix-ui/themes";
import { TransferStyle } from "src/features/SubscriptionManagement/UI/Transfet/TransferStyle";
import { ButtonUI } from "src/shared/ButtonUI/ButtonUI.tsx";

export const Transfer = () => {
  return (
    <>
      <CardSC>
        <PaddingWrapperSC>
          <Heading align={"center"}>Перечислите средства</Heading>
          <Text size={"3"} weight={"regular"} align={"center"}>
            Если все данные верны, осуществите перевод на указанный
            биткоин-кошелёк.
          </Text>
        </PaddingWrapperSC>

        <LineSC />
        <PaddingWrapperSC>
          <Text size={"3"} weight={"medium"} highContrast={true}>
            Шаг 1. Скопируйте номер кошелька
          </Text>
          <TextField.Root
            value={"1njrRcKQtfjjLuQxFYCeMXcth77m5TAYo"}
            size={"3"}
            readOnly={true}
            variant="surface"
          >
            <TextField.Slot side="right">
              <IconButton size={"2"} variant="ghost">
                <CopyIcon />
              </IconButton>
            </TextField.Slot>
          </TextField.Root>
        </PaddingWrapperSC>
        <PaddingWrapperSC>
          <Text size={"3"} weight={"medium"} highContrast={true}>
            Шаг 2. Скопируйте сумму платежа
          </Text>
          <TextField.Root
            value={"0.00001564 BTC"}
            size={"3"}
            readOnly={true}
            variant="surface"
          >
            <TextField.Slot side="right">
              <IconButton size={"2"} variant="ghost">
                <CopyIcon />
              </IconButton>
            </TextField.Slot>
          </TextField.Root>
        </PaddingWrapperSC>
        <PaddingWrapperSC>
          <Text size={"3"} weight={"medium"} highContrast={true}>
            Шаг 3. Отправьте платёж
          </Text>
        </PaddingWrapperSC>

        <LineSC />
        <PaddingWrapperSC>
          <ButtoGroupSC>
            <ButtonUI size={"4"} variant="outline">
              Назад
            </ButtonUI>
            <ButtonUI
              style={{ maxWidth: "264px", width: "100%" }}
              size={"4"}
              variant="solid"
            >
              Проверить платёж
            </ButtonUI>
          </ButtoGroupSC>
        </PaddingWrapperSC>
      </CardSC>
    </>
  );
};

const { LineSC, CardSC, ButtoGroupSC, PaddingWrapperSC } = TransferStyle();
