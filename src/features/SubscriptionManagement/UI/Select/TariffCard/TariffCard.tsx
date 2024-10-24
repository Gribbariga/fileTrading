import { Badge, Progress, Text } from "@radix-ui/themes";
import { TariffCardStyle } from "./TariffCardStyle.ts";
import { LightningBoltIcon } from "@radix-ui/react-icons";
import { ButtonUI } from "src/shared/ButtonUI/ButtonUI.tsx";
import { FC, useEffect, useState } from "react";
import { ITariffCard, TariffNames } from "../../../types/types.ts";
import { ITariffData } from "src/features/SubscriptionManagement/UI/SubscriptionManagement.tsx";
import { subscriptionSlice } from "src/entities/subscription/model/subcriptionSlice.ts";
import { getPrice } from "src/shared/API/subscription/subscription.ts";
import { getCookie } from "src/shared/lib/helper/getCookie/getCookie.ts";
import { ISubaccount } from "src/shared/API/account/subaccount/model.ts";

interface ITariffCardProps {
  tariffId: number;
  month: number;
  percent: number;
  userStorageSize: number;
  isExtension: boolean;
  isCurrentTarrif: boolean;
  backendName: TariffNames;
  userSubAccont: ISubaccount[];
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
  userSubAccont,
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
    if (subscribeStatus) {
      if (subscribeStatus.duration === 0) {
        if (
          userStorageSize > +tariffCard.storageSizeBytes ||
          (tariffCard.businessAccount
            ? tariffCard.businessAccount < userSubAccont.length
            : 0 < userSubAccont.length)
        ) {
          console.log("?!!");
          setIsDisabledButton(true);
          return;
        }
      } else {
        console.log(subscribeStatus.duration, month);

        if (
          (!isExtension && cardTarriffPoint <= userTarriffPoint) ||
          userStorageSize > +tariffCard.storageSizeBytes ||
          (isExtension && cardTarriffPoint < userTarriffPoint)
          // subscribeStatus.duration > month
        ) {
          console.log("?!!");
          setIsDisabledButton(true);
          return;
        }
      }
      setIsDisabledButton(false);
    }
  }, [subscribeStatus, isExtension, month, userSubAccont]);

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
    if (accountId && !isDisabledButton && subscribeStatus) {
      const duration =
        subscribeStatus?.duration < 0
          ? subscribeStatus.duration + 1
          : subscribeStatus.duration;
      getPrice({
        currency: "USD",
        tariff_id: tariffCard.tariffId,
        duration: isExtension
          ? month + duration
          : duration === 0
          ? duration + 1
          : duration,
        account_id: +accountId,
      }).then(({ data }) => {
        setPrice(+data.price);
      });
    }
  }, [month, isDisabledButton, isExtension, subscribeStatus]);

  // если у пользователя не истек срок и тариф слабее
  // если у пользователя даунгрейд упирается в лимит
  // текущий тариф

  return (
    <>
      <TariffCardWrapperSC
        isProfitable={userTarriffPoint + 1 === cardTarriffPoint}
      >
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
            {tariffCard.tariffName}{" "}
            {cardTarriffPoint === 4 && (
              <Text
                color={"orange"}
                ml={"2"}
                size={"2"}
                weight={"regular"}
                align={"left"}
              >
                Выгодно
              </Text>
            )}
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
              ? ""
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
          variant={
            userTarriffPoint + 1 === cardTarriffPoint ? "solid" : "outline"
          }
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
