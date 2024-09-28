import { Text } from "@radix-ui/themes";
import { SubAccountItemStyle } from "./SubAccountItemStyle.ts";
import { useForm } from "react-hook-form";
import { FC, useState } from "react";
import { ButtonUI } from "src/shared/ButtonUI/ButtonUI.tsx";
import { registerSubaccount } from "src/shared/API/account/subaccount/subaccount.tsx";

interface ISubmitData {
  subaccount_login: string;
  subaccount_password: string;
}

export interface ISubAccountItemProps {
  login: string;
  number: number;
  isCreate?: boolean;
  handleCanselCreate?: () => void;
}

export const SubAccountItem: FC<ISubAccountItemProps> = ({
  number,
  login,
  handleCanselCreate,
  isCreate,
}) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      subaccount_login: login,
      subaccount_password: "",
    },
  });

  const [isChange, setIsChange] = useState(isCreate ? true : false);

  const handleChange = () => {
    setIsChange(true);
  };

  const handleDelete = () => {};

  const handleFormSubmit = (data: ISubmitData) => {
    console.log(isCreate);
    if (isCreate) {
      registerSubaccount(data)
        .then(() => {})
        .catch(() => {});
    } else {
    }
  };

  const changeActiveButton = (
    <>
      <ButtonUI
        onClick={isCreate ? handleCanselCreate : handleDelete}
        color="red"
        size={"3"}
        value={"solied"}
        highContrast={false}
      >
        {isCreate ? "Отменить" : "Удалить"}
      </ButtonUI>
      <ButtonUI style={{ height: "100%" }} type="submit">
        Сохранить
      </ButtonUI>
    </>
  );

  return (
    <>
      <WrapperSC>
        <FormSC onSubmit={handleSubmit(handleFormSubmit)}>
          <Text mb={"4"} style={{ display: "block" }}>
            Аккаунт #{number}
          </Text>
          <InputsWrapperSC>
            <InputWrapperSC>
              <Text
                mb={"2"}
                style={{ display: "block" }}
                align={"left"}
                highContrast={true}
                size={"3"}
                weight={"medium"}
              >
                Придумайте логин
              </Text>
              <TextFieldSC
                size={"3"}
                variant="surface"
                {...register("subaccount_login", {
                  required: "Заполните все обязательные поля",
                  maxLength: { value: 250, message: "Логин слишком длинный" },
                })}
                placeholder="Введите логин"
              />
            </InputWrapperSC>
            <InputWrapperSC>
              <Text
                mb={"2"}
                style={{ display: "block" }}
                align={"left"}
                highContrast={true}
                size={"3"}
                weight={"medium"}
              >
                Придумайте логин
              </Text>
              <TextFieldSC
                size={"3"}
                variant="surface"
                {...register("subaccount_password", {
                  required: "Заполните все обязательные поля",
                  maxLength: { value: 250, message: "Логин слишком длинный" },
                })}
                placeholder="Введите логин"
              />
            </InputWrapperSC>
          </InputsWrapperSC>
          <ButtonWrapperSC>
            {isChange ? (
              changeActiveButton
            ) : (
              <ButtonUI
                onClick={handleChange}
                size={"3"}
                variant="outline"
                highContrast={false}
              >
                Изменить
              </ButtonUI>
            )}
          </ButtonWrapperSC>
        </FormSC>
      </WrapperSC>
    </>
  );
};

const {
  FormSC,
  WrapperSC,
  TextFieldSC,
  InputWrapperSC,
  InputsWrapperSC,
  ButtonWrapperSC,
} = SubAccountItemStyle();
