import { FC, useEffect, useState } from "react";
import { SelectStyle } from "./SelectStyle";

import {
  EyeClosedIcon,
  HeartFilledIcon,
  LockClosedIcon,
  TimerIcon,
  UpdateIcon,
} from "@radix-ui/react-icons";
import { ITariffCard } from "src/features/SubscriptionManagement/types/types";
import { TariffCard } from "src/features/SubscriptionManagement/UI/Select/TariffCard/TariffCard";
import { subscriptionSlice } from "src/entities/subscription/model/subcriptionSlice";
import { Heading, Text } from "@radix-ui/themes";
import { ITariffData } from "src/features/SubscriptionManagement/UI/SubscriptionManagement";

interface ISelectProps {
  month: number;
  handleMonthSelect: (value: number) => void;
  handleTariffSelect: (value: ITariffData) => void;
}

export const Select: FC<ISelectProps> = ({
  month,
  handleMonthSelect,
  handleTariffSelect,
}) => {
  const { tariffs } = subscriptionSlice((slice) => slice);

  const [tariffData, setTariffData] = useState<ITariffCard[]>([]);

  const mounthSet = [1, 3, 6, 12, 24];

  const tariffDataSet: {
    [key: string]: {
      tariffName: string;
      saleValue?: number;
      businessAccount?: number;
    };
  } = {
    Premium: {
      tariffName: "Премиум",
      saleValue: 50,
    },
    Business: { tariffName: "Бизнес", saleValue: 50 },
    Corporate: {
      tariffName: "Корпоративный",
      saleValue: 50,
      businessAccount: 50,
    },
  };

  useEffect(() => {
    if (tariffs) {
      const res = [];
      console.log(tariffs);
      console.log(tariffs.length);
      for (let i = 2; i < Object.values(tariffs).length; i++) {
        console.log(tariffs[i]);
        const name = tariffs[i].name as "Premium" | "Business" | "Corporate";
        const item = {
          backendName: name,
          isProfitable: false,
          price: tariffs[i].price,
          storageSize:
            +tariffs[i].max_folder_size < 1000000000000
              ? `${+tariffs[i].max_folder_size / 1024 ** 3}гб`
              : `${+tariffs[i].max_folder_size / 1024 ** 4}тб`,
          tariffName: tariffDataSet[name].tariffName,
          businessAccount: tariffDataSet[name]?.businessAccount,
          saleValue: tariffDataSet[name].saleValue,
          tariffFeatures: [
            {
              Icon: <HeartFilledIcon />,
              text: "Бесконечное число хранилищ и файлов",
            },
            {
              Icon: <UpdateIcon />,
              text: "Создание одноразовых ссылок",
            },
            {
              Icon: <EyeClosedIcon />,
              text: "Создание одноразовых ссылок",
            },
            {
              Icon: <LockClosedIcon />,
              text: "Установка пароля на просмотр хранилища",
            },
            {
              Icon: <TimerIcon />,
              text: "До 1 года срок жизни хранилища",
            },
          ],
        };

        res.push(item);
      }
      console.log(res);
      setTariffData(res);
    }
  }, [tariffs]);
  console.log(tariffData);
  const handleChangeMonth = (value: number) => {
    return () => handleMonthSelect(value);
  };

  return (
    <WrapperSC>
      <Heading size={"9"} weight={"bold"} highContrast={true}>
        Выберите подходящий тариф
      </Heading>
      <Text size={"3"} mb={"6"} weight={"regular"}>
        Получите больше возможностей с расширенной подпиской
      </Text>
      <SegmentControlRootSC mb={"6"} value={`${month}`} defaultValue="3">
        {mounthSet.map((item) => {
          return (
            <SegmentControlItemSC
              onClick={handleChangeMonth(item)}
              key={item}
              value={`${item}`}
            >
              {item} мес
            </SegmentControlItemSC>
          );
        })}
      </SegmentControlRootSC>
      <TariffListSC>
        {tariffData.map((item) => {
          return (
            <>
              <TariffCard
                backendName={
                  item.backendName as "Premium" | "Business" | "Corporate"
                }
                month={month}
                handleTariffSelect={handleTariffSelect}
                tariffCard={item}
              />
            </>
          );
        })}
      </TariffListSC>
    </WrapperSC>
  );
};

const { WrapperSC, TariffListSC, SegmentControlRootSC, SegmentControlItemSC } =
  SelectStyle();
