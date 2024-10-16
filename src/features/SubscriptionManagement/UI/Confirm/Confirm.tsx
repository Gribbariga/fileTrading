import { Heading, Text } from "@radix-ui/themes";
import { ConfirmStyle } from "./ConfirmStyle.ts";
import { ButtonUI } from "src/shared/ButtonUI/ButtonUI.tsx";

export const Confirm = () => {
  return (
    <>
      <CardSC>
        <PaddingWrapperSC>
          <Heading align={"center"}>Подтвердите свой выбор</Heading>
          <Text size={"3"} weight={"regular"} align={"center"}>
            Проверьте выбранные параметры
          </Text>
        </PaddingWrapperSC>

        <LineSC />
        <PaddingWrapperSC>
          <InfoListSC>
            <InfoLineSC>
              <InfoLineTitleSC size={"5"} weight={"medium"}>
                Количество дней:
              </InfoLineTitleSC>
              <Text size={"5"} weight={"medium"} highContrast={true}>
                11 ⮕ 251
              </Text>
            </InfoLineSC>
            <InfoLineSC>
              <InfoLineTitleSC size={"5"} weight={"medium"}>
                Тариф:
              </InfoLineTitleSC>
              <Text size={"5"} weight={"medium"} highContrast={true}>
                Бизнес ⮕ Премиум
              </Text>
            </InfoLineSC>
            <InfoLineSC>
              <InfoLineTitleSC size={"5"} weight={"medium"}>
                Сумма:
              </InfoLineTitleSC>
              <Text size={"5"} weight={"medium"} highContrast={true}>
                $13.62
              </Text>
            </InfoLineSC>
            <InfoLineSC>
              <InfoLineTitleSC size={"5"} weight={"medium"}>
                Скидка:
              </InfoLineTitleSC>
              <Text size={"5"} weight={"medium"} highContrast={true}>
                -10%
              </Text>
            </InfoLineSC>
          </InfoListSC>
        </PaddingWrapperSC>
        <LineSC />
        <PaddingWrapperSC>
          <InfoLineSC>
            <Text size={"5"} weight={"medium"}>
              Итого:
            </Text>
            <Heading size={"6"} weight={"bold"} highContrast={true} as="h2">
              $12.21
            </Heading>
          </InfoLineSC>
        </PaddingWrapperSC>

        <LineSC />
        <PaddingWrapperSC>
          <ButtoGroupSC>
            <ButtonUI size={"4"} variant="outline">
              Назад
            </ButtonUI>
            <ButtonUI
              style={{ maxWidth: "264px", width: "100%" }}
              size={"4"}
              variant="solid"
            >
              Продолжить
            </ButtonUI>
          </ButtoGroupSC>
        </PaddingWrapperSC>
      </CardSC>
    </>
  );
};

const {
  LineSC,
  CardSC,
  InfoListSC,
  InfoLineSC,
  ButtoGroupSC,
  InfoLineTitleSC,
  PaddingWrapperSC,
} = ConfirmStyle();
