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
      <TariffCardWrapperSC>
        {saleValue && (
          <>
            <BadgeWrapperSC>
              <Badge>
                <LightningBoltIcon />
                {saleValue}
              </Badge>
            </BadgeWrapperSC>
          </>
        )}

        <TariffCardHeaderSC>
          <Text>{tariffName}</Text>
          {isProfitable && (
            <>
              <Text></Text>
            </>
          )}
        </TariffCardHeaderSC>
        <Text>{storageSize}</Text>
        <Text style={{ height: 20 }} mb={"3"}>
          {businessAccount
            ? businessAccount
            : `+${businessAccount} бизнес-аккаунтов`}
        </Text>
        <FeatureListSC>
          {tariffFeatures.map(({ Icon, text }) => {
            return (
              <>
                <FeatureListItemSC>
                  {Icon}
                  <Text>{text}</Text>
                </FeatureListItemSC>
              </>
            );
          })}
        </FeatureListSC>
        <ButtonUI>{`Подключить за $${price}`}</ButtonUI>
      </TariffCardWrapperSC>
    </>
  );
};

const {
  FeatureListSC,
  BadgeWrapperSC,
  FeatureListItemSC,
  TariffCardHeaderSC,
  TariffCardWrapperSC,
} = TariffCardStyle();
