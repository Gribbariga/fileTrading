import { Badge, Text } from "@radix-ui/themes";
import { TariffCardStyle } from "./TariffCardStyle.ts";
import { LightningBoltIcon } from "@radix-ui/react-icons";
import { ButtonUI } from "src/shared/ButtonUI/ButtonUI.tsx";
import { FC } from "react";
import { ITariffCard } from "../../types/types.ts";

export const TariffCard: FC<ITariffCard> = ({
  price,
  saleValue,
  tariffName,
  storageSize,
  isProfitable,
  tariffFeatures,
  businessAccount,
}) => {
  return (
    <>
      <TariffCardWrapperSC isProfitable={isProfitable}>
        {saleValue && (
          <>
            <BadgeWrapperSC>
              <Badge>
                <LightningBoltIcon />
                {saleValue}%
              </Badge>
            </BadgeWrapperSC>
          </>
        )}

        <TariffCardHeaderSC>
          <Text size={"2"} weight={"light"}>
            {tariffName}
          </Text>
          {isProfitable && (
            <>
              <Text size={"2"} weight={"light"} highContrast={true}></Text>
            </>
          )}
        </TariffCardHeaderSC>
        <Text style={{ display: "block" }} size={"9"} weight={"bold"}>
          {storageSize}
        </Text>
        <div style={{ height: 20, marginBottom: 12 }}>
          <Text size={"2"} weight={"light"} mb={"3"}>
            {!businessAccount
              ? businessAccount
              : `+${businessAccount} бизнес-аккаунтов`}
          </Text>
        </div>

        <FeatureListSC>
          {tariffFeatures.map(({ Icon, text }) => {
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
          style={{ width: "100%" }}
          size={"4"}
          variant={isProfitable ? "solid" : "outline"}
        >{`Подключить за $${price}`}</ButtonUI>
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
