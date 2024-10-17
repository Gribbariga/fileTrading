import { CopyIcon, InfoCircledIcon } from "@radix-ui/react-icons";
import {
  Callout,
  Heading,
  IconButton,
  Text,
  TextField,
} from "@radix-ui/themes";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TransferStyle } from "src/features/SubscriptionManagement/UI/Transfet/TransferStyle";
import { cryptoPaymentStatus } from "src/shared/API/payment/crypto/api";
import { ButtonUI } from "src/shared/ButtonUI/ButtonUI.tsx";

interface ITransferProps {
  payment_id: number;
  handleCansel: () => void;
}

export const Transfer: FC<ITransferProps> = ({ handleCansel, payment_id }) => {
  const navigation = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [textError] = useState("");

  const handleCheckPayment = () => {
    setIsLoading(true);
    cryptoPaymentStatus({ payment_id })
      .then(() => {
        setIsLoading(false);
        navigation("/home");
      })
      .catch(() => {
        setIsLoading(true);
      });
  };

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
        {!!textError.length && (
          <>
            <Callout.Root>
              <Callout.Icon>
                <InfoCircledIcon />
              </Callout.Icon>
              <Callout.Text>{textError}</Callout.Text>
            </Callout.Root>
          </>
        )}

        <LineSC />
        <PaddingWrapperSC>
          <ButtoGroupSC>
            <ButtonUI onClick={handleCansel} size={"4"} variant="outline">
              Назад
            </ButtonUI>
            <ButtonUI
              loading={isLoading}
              style={{ maxWidth: "264px", width: "100%" }}
              size={"4"}
              variant="solid"
              onClick={handleCheckPayment}
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
