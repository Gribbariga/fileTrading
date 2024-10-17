import { Progress, Text } from "@radix-ui/themes";
import { TabsSubscribeContentStyle } from "./TabsSubscribeContentStyle.ts";
import { ButtonUI } from "src/shared/ButtonUI/ButtonUI.tsx";
import { useNavigate } from "react-router-dom";

export const TabsSubscribeContent = () => {
  const navigation = useNavigate();

  const infoItemSet = [
    { name: "Тариф:", value: "Бизнес" },
    { name: "Дней осталось:", value: "11" },
    { name: "Заполнено:", value: "75%" },
  ];

  return (
    <>
      <InfoListSC>
        {infoItemSet.map((item) => {
          return (
            <>
              <InfoItemWrapperSC>
                <Text size={"3"} weight={"medium"}>
                  {item.name}
                </Text>
                <Text size={"3"} weight={"medium"} highContrast={true}>
                  {item.value}
                </Text>
              </InfoItemWrapperSC>
            </>
          );
        })}
      </InfoListSC>
      <Progress size={"1"} variant="classic" value={75} mb={"4"} />
      <ButtonUI
        onClick={() => navigation("/tariff")}
        size={"3"}
        variant="surface"
      >
        Управлять подпиской
      </ButtonUI>
    </>
  );
};

const { InfoListSC, InfoItemWrapperSC } = TabsSubscribeContentStyle();
