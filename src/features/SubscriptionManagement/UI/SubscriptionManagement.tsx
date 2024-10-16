import { useState } from "react";
import { TariffNames } from "src/features/SubscriptionManagement/types/types";
import { Confirm } from "src/features/SubscriptionManagement/UI/Confirm/Confirm";
import { Select } from "src/features/SubscriptionManagement/UI/Select/Select";

import { Transfer } from "src/features/SubscriptionManagement/UI/Transfet/Transfer.tsx";

export interface ITariffData {
  selectTariffName: TariffNames;
  price: number;
  sale: number;
}

export const SubscriptionManagement = () => {
  const [step, setStep] = useState<"select" | "confirm" | "transfer">("select");

  const [month, setMonth] = useState(3);

  const [tariffData, setTariffData] = useState<ITariffData>({
    selectTariffName: "Free",
    price: 0,
    sale: 0,
  });

  const handleSelectMonth = (value: number) => {
    setMonth(value);
  };
  const handleTariffSelect = (value: ITariffData) => {
    setTariffData(value);
    setStep("confirm");
  };

  const ConfirmBack = () => {
    setStep("select");
  };

  return (
    <>
      {step === "select" && (
        <Select
          handleMonthSelect={handleSelectMonth}
          handleTariffSelect={handleTariffSelect}
          month={month}
        />
      )}
      {step === "confirm" && (
        <Confirm
          handleBack={ConfirmBack}
          price={tariffData.price}
          sale={tariffData.sale}
          monthNumber={month}
          selectTariffName={tariffData.selectTariffName}
        />
      )}
      {step === "transfer" && <Transfer />}
    </>
  );
};
