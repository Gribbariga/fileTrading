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
import { Heading, Switch, Text } from "@radix-ui/themes";
import { ITariffData } from "src/features/SubscriptionManagement/UI/SubscriptionManagement";
import { storageSlice } from "src/entities/storage/model/storageSlice";
import { getAllFolder } from "src/shared/API/storage/folder/api";

interface ISelectProps {
  month: number;
  isExtension: boolean;
  handleChecked: () => void;
  handleMonthSelect: (value: number) => void;
  handleTariffSelect: (value: ITariffData) => void;
}

export const Select: FC<ISelectProps> = ({
  month,
  isExtension,
  handleChecked,
  handleMonthSelect,
  handleTariffSelect,
}) => {
  const { tariffs, subscribeStatus } = subscriptionSlice((slice) => slice);

  const [tariffData, setTariffData] = useState<ITariffCard[]>([]);

  const { allFolder } = storageSlice((state) => state);

  const [storageInfo, setStorageInfo] = useState({
    percent: 0,
    storageSize: 0,
  });
  const currentTariff =
    tariffs !== null ? tariffs[subscribeStatus?.tariff_id || 0] : null;
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
    if (allFolder.length) {
      console.log("");
    } else {
      getAllFolder()
        .then(({ data }) => {
          let res = 0;
          data.folders.map((item) => {
            res += +item.size;
          });
          setStorageInfo({
            percent: (res / +(currentTariff?.max_storage_size || 1)) * 100,
            storageSize: res,
          });
        })
        .catch(() => {});
    }
  }, [tariffs, subscribeStatus]);

  useEffect(() => {
    if (tariffs) {
      const res = [];

      for (let i = 2; i < Object.values(tariffs).length; i++) {
        const name = tariffs[i].name as "Premium" | "Business" | "Corporate";
        const item = {
          tariffId: tariffs[i].tariff_id,
          backendName: name,
          isProfitable: false,
          price: tariffs[i].price,
          storageSizeBytes: tariffs[i].max_storage_size,
          storageSize:
            +tariffs[i].max_storage_size < 1000000000000
              ? `${+tariffs[i].max_storage_size / 1024 ** 3}гб`
              : `${+tariffs[i].max_storage_size / 1024 ** 4}тб`,
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
      {subscribeStatus && subscribeStatus.duration > 0 && (
        <SwitchWrapper>
          <Switch
            size={"1"}
            variant="classic"
            checked={isExtension}
            onClick={handleChecked}
          />
          <Text size={"2"} weight={"regular"}>
            Продлить подписку
          </Text>
        </SwitchWrapper>
      )}

      {isExtension && (
        <SegmentControlRootSC mb={"6"} defaultValue="1" size={"2"}>
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
      )}

      <TariffListSC>
        {tariffData.map((item) => {
          return (
            <>
              <TariffCard
                userStorageSize={storageInfo.storageSize}
                isExtension={isExtension}
                percent={storageInfo.percent}
                isCurrentTarrif={item.backendName === currentTariff?.name}
                tariffId={item.tariffId}
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

const {
  WrapperSC,
  TariffListSC,
  SwitchWrapper,
  SegmentControlRootSC,
  SegmentControlItemSC,
} = SelectStyle();
