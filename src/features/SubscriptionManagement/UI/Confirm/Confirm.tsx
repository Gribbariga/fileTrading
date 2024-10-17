import { Heading, Text } from "@radix-ui/themes";
import { ConfirmStyle } from "./ConfirmStyle.ts";
import { ButtonUI } from "src/shared/ButtonUI/ButtonUI.tsx";
import { FC, useState } from "react";
import { subscriptionSlice } from "src/entities/subscription/model/subcriptionSlice.ts";
import { TariffNames } from "src/features/SubscriptionManagement/types/types.ts";
import { createCryptoPayment } from "src/shared/API/payment/crypto/api.ts";
import { IPaymentData } from "src/features/SubscriptionManagement/UI/SubscriptionManagement.tsx";

interface IConfirm {
  tariffId: number;
  handleNext: () => void;
  handleBack: () => void;
  setPaymentData: (value: IPaymentData) => void;
  setId: (paymentid: number) => void;
  price: number;
  sale: number;
  monthNumber: number;
  selectTariffName: TariffNames;
}

type Tariff = {
  [key in TariffNames]: string;
};

export const Confirm: FC<IConfirm> = ({
  handleBack,
  handleNext,
  price,
  sale,
  setId,
  setPaymentData,
  tariffId,
  monthNumber,
  selectTariffName,
}) => {
  const { subscribeStatus } = subscriptionSlice((state) => state);

  const [isLoading, setIsLoading] = useState(false);

  const tariff: Tariff = {
    Free: "Бесплатный",
    Premium: "Премиум",
    Business: "Бизнес",
    Corporate: "Корпоративный",
    Unauthorized: "Неавторизованный",
  };

  function getDaysInMonths(months: number) {
    let days = 0;

    for (let i = 0; i < months; i++) {
      // Используем объект Date для определения количества дней в месяце
      const monthIndex = i % 12; // Месяцы от 0 до 11
      const year = new Date().getFullYear(); // Текущий год (можно заменить на нужный)
      days += new Date(year, monthIndex + 1, 0).getDate(); // Переходим к следующему месяцу и получаем количество дней в текущем месяце
    }

    return days;
  }

  // Пример использования
  const totalDays = getDaysInMonths(monthNumber);
  const totalPrice = price - (price / 100) * sale;

  const daysLeft =
    !!subscribeStatus && subscribeStatus.duration > 0
      ? subscribeStatus.duration
      : 0;

  const handleCreatePayment = () => {
    setIsLoading(true);
    createCryptoPayment({
      currency: `BTC`,
      duration: monthNumber,
      tariff_id: tariffId,
    })
      .then(({ data }) => {
        setIsLoading(false);
        setId(data.payment_id);
        setPaymentData({
          adress: data.address,
          price: `${data.price} ${data.currency}`,
        });
        handleNext();
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <CardSC>
        <PaddingWrapperSC>
          <Heading align={"center"}>Подтвердите свой выбор</Heading>
          <Text size={"3"} weight={"regular"} align={"center"}>
            Проверьте выбранные параметры
          </Text>
        </PaddingWrapperSC>

        <LineSC />
        <PaddingWrapperSC>
          <InfoListSC>
            <InfoLineSC>
              <InfoLineTitleSC size={"5"} weight={"medium"}>
                Количество дней:
              </InfoLineTitleSC>
              <Text size={"5"} weight={"medium"} highContrast={true}>
                {daysLeft} ⮕ {daysLeft + totalDays}
              </Text>
            </InfoLineSC>
            <InfoLineSC>
              <InfoLineTitleSC size={"5"} weight={"medium"}>
                Тариф:
              </InfoLineTitleSC>
              <Text size={"5"} weight={"medium"} highContrast={true}>
                {tariff[subscribeStatus?.name as TariffNames]} ⮕{" "}
                {tariff[selectTariffName]}
              </Text>
            </InfoLineSC>
            <InfoLineSC>
              <InfoLineTitleSC size={"5"} weight={"medium"}>
                Сумма:
              </InfoLineTitleSC>
              <Text size={"5"} weight={"medium"} highContrast={true}>
                ${price.toFixed(2)}
              </Text>
            </InfoLineSC>
            <InfoLineSC>
              <InfoLineTitleSC size={"5"} weight={"medium"}>
                Скидка:
              </InfoLineTitleSC>
              <Text size={"5"} weight={"medium"} highContrast={true}>
                -{sale}%
              </Text>
            </InfoLineSC>
          </InfoListSC>
        </PaddingWrapperSC>
        <LineSC />
        <PaddingWrapperSC>
          <InfoLineSC>
            <Text size={"5"} weight={"medium"}>
              Итого:
            </Text>
            <Heading size={"6"} weight={"bold"} highContrast={true} as="h2">
              ${totalPrice}
            </Heading>
          </InfoLineSC>
        </PaddingWrapperSC>

        <LineSC />
        <PaddingWrapperSC>
          <ButtoGroupSC>
            <ButtonUI onClick={handleBack} size={"4"} variant="outline">
              Назад
            </ButtonUI>
            <ButtonUI
              loading={isLoading}
              onClick={handleCreatePayment}
              style={{ maxWidth: "264px", width: "100%" }}
              size={"4"}
              variant="solid"
            >
              Продолжить
            </ButtonUI>
          </ButtoGroupSC>
        </PaddingWrapperSC>
      </CardSC>
    </>
  );
};

const {
  LineSC,
  CardSC,
  InfoListSC,
  InfoLineSC,
  ButtoGroupSC,
  InfoLineTitleSC,
  PaddingWrapperSC,
} = ConfirmStyle();
