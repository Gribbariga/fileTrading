import { Heading, Text } from "@radix-ui/themes";
import { SelectTariffStyle } from "./SelectTariffStyle.ts";
import { Cross1Icon } from "@radix-ui/react-icons";
import { SubscriptionManagement } from "src/features/SubscriptionManagement/publicApi.ts";

export const SelectTariff = () => {
  return (
    // <SelectTariffWrapperSC>
    //   <IconButtonSC size={"4"} variant="ghost">
    //     <Cross1Icon />
    //   </IconButtonSC>
    //   <Heading size={"7"} weight={"bold"} highContrast={true}>
    //     Выберите подходящий тариф
    //   </Heading>
    //   <Text size={"3"} mb={"6"} weight={"regular"}>
    //     Получите больше возможностей с расширенной подпиской
    //   </Text>
    //   <SubscriptionManagement />
    // </SelectTariffWrapperSC>
    <SubscriptionManagement />
  );
};

const { IconButtonSC, SelectTariffWrapperSC } = SelectTariffStyle();
