import { Badge, Progress, Text } from "@radix-ui/themes";
import { TariffCardStyle } from "./TariffCardStyle.ts";
import { LightningBoltIcon } from "@radix-ui/react-icons";
import { ButtonUI } from "src/shared/ButtonUI/ButtonUI.tsx";
import { FC, useEffect, useState } from "react";
import { ITariffCard, TariffNames } from "../../../types/types.ts";
import { ITariffData } from "src/features/SubscriptionManagement/UI/SubscriptionManagement.tsx";
import { subscriptionSlice } from "src/entities/subscription/model/subcriptionSlice.ts";
import { getPrice } from "src/shared/API/subscription/subscription.ts";
import { getDaysInMonths } from "src/shared/lib/helper/getDaysInMonths/getDaysInMonths.tsx";
import { getCookie } from "src/shared/lib/helper/getCookie/getCookie.ts";

interface ITariffCardProps {
  tariffId: number;
  month: number;
  percent: number;
  userStorageSize: number;
  isExtension: boolean;
  isCurrentTarrif: boolean;
  backendName: TariffNames;
  handleTariffSelect: (value: ITariffData) => void;
  tariffCard: ITariffCard;
}

export const TariffCard: FC<ITariffCardProps> = ({
  month,
  percent,
  tariffId,
  backendName,
  tariffCard,
  isExtension,
  userStorageSize,
  isCurrentTarrif,
  handleTariffSelect,
}) => {
  const { tariffs, subscribeStatus } = subscriptionSlice((slice) => slice);

  const [isDisabledButton, setIsDisabledButton] = useState(false);

  const [buttonText, setButtonText] = useState("");

  const [price, setPrice] = useState(0);

  const currentTariff =
    tariffs !== null ? tariffs[subscribeStatus?.tariff_id || 0] : null;

  const currentTarriffName =
    (currentTariff?.name as TariffNames) || "Unauthorized";

  const tarriffPoint: { [key in TariffNames]: number } = {
    Unauthorized: 1,
    Free: 2,
    Premium: 3,
    Business: 4,
    Corporate: 5,
  };

  const cardTarriffPoint = tarriffPoint[backendName];
  const userTarriffPoint = tarriffPoint[currentTarriffName];

  // const isDisabledButton =
  //   (!isExtension && isCurrentTarrif) ||
  //   !!(
  //     subscribeStatus &&
  //     subscribeStatus.duration >= 0 &&
  //     userTarriffPoint > cardTarriffPoint
  //   );

  useEffect(() => {
    if (subscribeStatus && subscribeStatus.duration <= 0) {
      if (userStorageSize > +tariffCard.storageSizeBytes) {
        setIsDisabledButton(true);
      }
    } else {
      if (
        cardTarriffPoint <= userTarriffPoint ||
        userStorageSize > +tariffCard.storageSizeBytes
      ) {
        setIsDisabledButton(true);
      }
    }
  }, [subscribeStatus]);

  useEffect(() => {
    if (isDisabledButton) {
      console.log(backendName, currentTariff);
      if (isCurrentTarrif) {
        setButtonText("Текущий");
      } else {
        setButtonText("Недоступно");
      }
    } else {
      if (userTarriffPoint < 3) {
        console.log("???");
        setButtonText("Подключить");
      } else if (subscribeStatus && subscribeStatus.duration <= 0) {
        if (cardTarriffPoint === userTarriffPoint) {
          setButtonText("Подключить");
        } else if (cardTarriffPoint < userTarriffPoint) {
          setButtonText("Снизить и подключить");
        } else {
          setButtonText("Подключить и улучшить");
        }
      } else {
        if (isExtension) {
          if (cardTarriffPoint === userTarriffPoint) {
            setButtonText("Продлить ");
          } else if (cardTarriffPoint >= userTarriffPoint) {
            setButtonText("Улучшить и продлить");
          }
        } else {
          setButtonText("Улучшить");
        }
      }
    }
  }, [isDisabledButton, userTarriffPoint, isExtension]);

  useEffect(() => {
    const accountId = getCookie("account_id");
    if (accountId && !isDisabledButton) {
      getPrice({
        currency: "USD",
        tariff_id: tariffCard.tariffId,
        duration: getDaysInMonths(month),
        account_id: +accountId,
      }).then(({ data }) => {
        setPrice(+data.price);
      });
    }
  }, [month, isDisabledButton]);

  // если у пользователя не истек срок и тариф слабее
  // если у пользователя даунгрейд упирается в лимит
  // текущий тариф

  return (
    <>
      <TariffCardWrapperSC isProfitable={tariffCard.isProfitable}>
        {tariffCard.saleValue && (
          <>
            <BadgeWrapperSC>
              <Badge>
                <LightningBoltIcon />
                {tariffCard.saleValue}%
              </Badge>
            </BadgeWrapperSC>
          </>
        )}

        <TariffCardHeaderSC>
          <Text size={"2"} weight={"light"}>
            {tariffCard.tariffName}
          </Text>
          {tariffCard.isProfitable && (
            <>
              <Text size={"2"} weight={"light"} highContrast={true}></Text>
            </>
          )}
        </TariffCardHeaderSC>
        <Text style={{ display: "block" }} size={"9"} weight={"bold"}>
          {tariffCard.storageSize}
        </Text>
        <div style={{ height: 20, marginBottom: 12 }}>
          <Text size={"2"} weight={"light"} mb={"3"}>
            {!tariffCard.businessAccount
              ? tariffCard.businessAccount
              : `+${tariffCard.businessAccount} бизнес-аккаунтов`}
          </Text>
        </div>

        {isCurrentTarrif && (
          <div style={{ marginBottom: "12px" }}>
            <Progress value={percent} />
            <Text
              size={"1"}
              weight={"regular"}
            >{`Заполнено ${percent}% объема!`}</Text>
          </div>
        )}
        <FeatureListSC>
          {tariffCard.tariffFeatures.map(({ Icon, text }) => {
            return (
              <>
                <FeatureListItemSC>
                  <IconWrapperSC>{Icon}</IconWrapperSC>
                  <Text size={"2"} weight={"regular"}>
                    {text}
                  </Text>
                </FeatureListItemSC>
              </>
            );
          })}
        </FeatureListSC>
        <ButtonUI
          disabled={isDisabledButton}
          onClick={() =>
            handleTariffSelect({
              tariffId: tariffId,
              price: price,
              sale: tariffCard.saleValue || 0,
              selectTariffName: backendName,
            })
          }
          style={{ width: "100%" }}
          size={"4"}
          variant={tariffCard.isProfitable ? "solid" : "outline"}
        >
          {buttonText} {isDisabledButton ? "" : `за $${price}`}
        </ButtonUI>
      </TariffCardWrapperSC>
    </>
  );
};

const {
  IconWrapperSC,
  FeatureListSC,
  BadgeWrapperSC,
  FeatureListItemSC,
  TariffCardHeaderSC,
  TariffCardWrapperSC,
} = TariffCardStyle();
