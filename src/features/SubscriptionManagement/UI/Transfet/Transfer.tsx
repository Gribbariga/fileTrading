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
import {
  cryptoPaymentStatus,
  paidPayment,
} from "src/shared/API/payment/crypto/api";
import { ButtonUI } from "src/shared/ButtonUI/ButtonUI.tsx";

interface ITransferProps {
  adress: string;
  price: string;
  payment_id: number;
  handleCansel: () => void;
}

export const Transfer: FC<ITransferProps> = ({
  handleCansel,
  adress,
  price,
  payment_id,
}) => {
  const navigation = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [textError, setTextError] = useState("");

  const longPolling = async () => {
    try {
      const response = await cryptoPaymentStatus({ payment_id: payment_id });
      if (response.data && response.data.status === "Confirm") {
        navigation("/home");
      } else {
        setTimeout(() => {
          longPolling();
        }, 15000);
      }
    } catch (error) {
      setTextError(`неуплата ${error}`);
    }
  };

  // Запускаем long polling

  const handleCheckPayment = () => {
    setIsLoading(true);
    paidPayment({ payment_id: payment_id })
      .then(() => {
        longPolling();
      })
      .catch(() => {});
    // cryptoPaymentStatus({ payment_id })
    //   .then(({ data }) => {
    //     setIsLoading(false);
    //     if (data.status === "Confirm") {
    //       navigation("/home");
    //     } else {
    //       setTextError("неуплата");
    //     }
    //   })
    //   .catch(() => {
    //     setIsLoading(true);
    //   });
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
            value={adress}
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
            value={price}
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
          <PaddingWrapperSC>
            <Callout.Root size={"1"} variant="soft" color="red">
              <Callout.Icon>
                <InfoCircledIcon />
              </Callout.Icon>
              <Callout.Text>{textError}</Callout.Text>
            </Callout.Root>
          </PaddingWrapperSC>
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
