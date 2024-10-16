import { SubscriptionManagementStyle } from "./SubscriptionManagementStyle.ts";
import { useState } from "react";
import { TariffCard } from "./TariffCard/TariffCard.tsx";
import { ITariffCard } from "../types/types.ts";

import {
  EyeClosedIcon,
  HeartFilledIcon,
  LockClosedIcon,
  TimerIcon,
  UpdateIcon,
} from "@radix-ui/react-icons";
import { Confirm } from "src/features/SubscriptionManagement/UI/Confirm/Confirm.tsx";

export const SubscriptionManagement = () => {
  const [monthCount, setMonthCount] = useState(3);

  const mounthSet = [1, 3, 6, 12, 24];

  const tariffData: ITariffCard[] = [
    {
      isProfitable: false,
      price: 49,
      storageSize: "20 гб",
      tariffName: "Премиум",
      saleValue: 5,
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
    },
    {
      isProfitable: true,
      price: 99,
      storageSize: `40 тб`,
      tariffName: "Бизнес",
      saleValue: 5,
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
    },
    {
      isProfitable: false,
      price: 199,
      storageSize: `1 тб`,
      tariffName: "Корпоративный",
      businessAccount: 50,
      saleValue: 50,
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
    },
  ];

  const handleChangeMonth = (value: number) => {
    return () => setMonthCount(value);
  };

  return (
    <>
      {/* <SegmentControlRootSC mb={"6"} value={`${monthCount}`} defaultValue="3">
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
              <TariffCard {...item} />
            </>
          );
        })}
      </TariffListSC> */}
      {<Confirm />}
    </>
  );
};

const { TariffListSC, SegmentControlRootSC, SegmentControlItemSC } =
  SubscriptionManagementStyle();
