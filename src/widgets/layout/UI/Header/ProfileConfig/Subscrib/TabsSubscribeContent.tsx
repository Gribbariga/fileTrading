import { Progress, Text } from "@radix-ui/themes";
import { TabsSubscribeContentStyle } from "./TabsSubscribeContentStyle.ts";
import { ButtonUI } from "src/shared/ButtonUI/ButtonUI.tsx";
import { useNavigate } from "react-router-dom";
import { subscriptionSlice } from "src/entities/subscription/model/subcriptionSlice.ts";
import { useEffect, useState } from "react";
import { getAllFolder } from "src/shared/API/storage/folder/api.ts";
import { storageSlice } from "src/entities/storage/model/storageSlice.ts";

type ITariffName = "Free" | "Premium" | "Business" | "Corporate";

export const TabsSubscribeContent = () => {
  const navigation = useNavigate();

  const { tariffs, subscribeStatus } = subscriptionSlice((state) => state);
  const { allFolder } = storageSlice((state) => state);

  const [percent, setPercent] = useState(0);

  const TariffName: Record<ITariffName, string> = {
    Free: "Бесплатный",
    Premium: "Премиум",
    Business: "Бизнес",
    Corporate: "Корпоративный",
  };

  const infoItemSet = [
    {
      name: "Тариф:",
      value: TariffName[(subscribeStatus?.name as ITariffName) || "free"],
    },
    {
      name: "Месяцев осталось:",
      value: subscribeStatus?.duration || 0 < 0 ? 0 : subscribeStatus?.duration,
    },
    { name: "Заполнено:", value: `${percent}%` },
  ];

  useEffect(() => {
    if (allFolder.length <= 0 && tariffs && subscribeStatus) {
      const currentTariff =
        tariffs !== null ? tariffs[subscribeStatus?.tariff_id || 0] : null;
      getAllFolder()
        .then(({ data }) => {
          let res = 0;
          data.folders.map((item) => {
            res += +item.size;
          });
          setPercent((res / +(currentTariff?.max_storage_size || 1)) * 100);
        })
        .catch(() => {});
    }
  }, [tariffs, subscribeStatus]);

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
