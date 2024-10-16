import { useState } from "react";
import { Select } from "src/features/SubscriptionManagement/UI/Select/Select";

import { Transfer } from "src/features/SubscriptionManagement/UI/Transfet/Transfer.tsx";

export const SubscriptionManagement = () => {
  const [step, setStep] = useState("select");

  return (
    <>
      <Select />
      {/* {<Confirm />} */}
      {/* <Transfer /> */}
    </>
  );
};
