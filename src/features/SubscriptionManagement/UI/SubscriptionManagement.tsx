import { useState } from "react";
import { TariffNames } from "src/features/SubscriptionManagement/types/types";
import { Confirm } from "src/features/SubscriptionManagement/UI/Confirm/Confirm";
import { Select } from "src/features/SubscriptionManagement/UI/Select/Select";

import { Transfer } from "src/features/SubscriptionManagement/UI/Transfet/Transfer.tsx";
import { canselCryptoPayment } from "src/shared/API/payment/crypto/api";

export interface ITariffData {
  tariffId: number;
  selectTariffName: TariffNames;
  price: number;
  sale: number;
}

export interface IPaymentData {
  price: string;
  adress: string;
}

export const SubscriptionManagement = () => {
  const [step, setStep] = useState<"select" | "confirm" | "transfer">("select");
  const [paymentId, setPaymentId] = useState<null | number>(null);

  const [isExtension, setIsExtension] = useState(true);

  const [month, setMonth] = useState(1);

  const [tariffData, setTariffData] = useState<ITariffData>({
    tariffId: 0,
    selectTariffName: "Free",
    price: 0,
    sale: 0,
  });

  const [paymentData, setPaymentData] = useState<IPaymentData>({
    adress: "",
    price: "",
  });

  const handleSelectMonth = (value: number) => {
    setMonth(value);
  };
  const handleTariffSelect = (value: ITariffData) => {
    setTariffData(value);
    setStep("confirm");
  };

  const handleStartCrypto = () => {
    setStep("transfer");
  };

  const confirmBack = () => {
    setStep("select");
  };

  const handleCansel = () => {
    if (paymentId) {
      canselCryptoPayment({ payment_id: paymentId }).then(() => {
        setStep("select");
      });
    }
  };

  const setId = (value: number) => {
    setPaymentId(value);
  };

  const setTransferData = (data: IPaymentData) => {
    setPaymentData(data);
  };

  const chechedExtension = () => {
    if (isExtension) {
      setMonth(1);
      setIsExtension((prev) => !prev);
    } else {
      setIsExtension(true);
    }
  };

  return (
    <>
      {step === "select" && (
        <Select
          isExtension={isExtension}
          handleChecked={chechedExtension}
          handleMonthSelect={handleSelectMonth}
          handleTariffSelect={handleTariffSelect}
          month={month}
        />
      )}
      {step === "confirm" && (
        <Confirm
          setPaymentData={setTransferData}
          setId={setId}
          handleNext={handleStartCrypto}
          tariffId={tariffData.tariffId}
          handleBack={confirmBack}
          price={tariffData.price}
          sale={tariffData.sale}
          monthNumber={month}
          selectTariffName={tariffData.selectTariffName}
        />
      )}
      {step === "transfer" && paymentId && (
        <Transfer
          {...paymentData}
          payment_id={paymentId}
          handleCansel={handleCansel}
        />
      )}
    </>
  );
};
