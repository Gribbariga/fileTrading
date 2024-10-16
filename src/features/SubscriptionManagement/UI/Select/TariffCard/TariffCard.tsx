import { Badge, Text } from "@radix-ui/themes";
import { TariffCardStyle } from "./TariffCardStyle.ts";
import { LightningBoltIcon } from "@radix-ui/react-icons";
import { ButtonUI } from "src/shared/ButtonUI/ButtonUI.tsx";
import { FC } from "react";
import { ITariffCard, TariffNames } from "../../../types/types.ts";
import { ITariffData } from "src/features/SubscriptionManagement/UI/SubscriptionManagement.tsx";

interface ITariffCardProps {
  month: number;
  backendName: TariffNames;
  handleTariffSelect: (value: ITariffData) => void;
  tariffCard: ITariffCard;
}

export const TariffCard: FC<ITariffCardProps> = ({
  month,
  backendName,
  tariffCard,
  handleTariffSelect,
}) => {
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
          onClick={() =>
            handleTariffSelect({
              price: tariffCard.price * month,
              sale: tariffCard.saleValue || 0,
              selectTariffName: backendName,
            })
          }
          style={{ width: "100%" }}
          size={"4"}
          variant={tariffCard.isProfitable ? "solid" : "outline"}
        >{`Подключить за $${tariffCard.price * month}`}</ButtonUI>
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
