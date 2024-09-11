import { Text } from "@radix-ui/themes";
import { SubAccountItemStyle } from "./SubAccountItemStyle.ts";
import { useForm } from "react-hook-form";
import { FC, useState } from "react";
import { ButtonUI } from "src/shared/ButtonUI/ButtonUI.tsx";

interface ISubmitData {
  login: string;
  password: string;
}

export interface ISubAccountItemProps {
  number: number;
}

export const SubAccountItem: FC<ISubAccountItemProps> = ({ number }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
  });

  const [isChange, setIsChange] = useState(false);

  const handleChange = () => {
    setIsChange(true);
  };

  const handleDelete = () => {};

  const handleFormSubmit = (data: ISubmitData) => {
    console.log(data);
  };

  const changeActiveButton = (
    <>
      <ButtonUI
        onClick={handleDelete}
        color="red"
        size={"3"}
        value={"solied"}
        highContrast={false}
      >
        Удалить
      </ButtonUI>
      <ButtonUI type="submit">Сохранить</ButtonUI>
    </>
  );

  return (
    <>
      <WrapperSC>
        <FormSC onSubmit={handleSubmit(handleFormSubmit)}>
          <Text>Аккаунт #{number}</Text>
          <InputsWrapperSC>
            <InputWrapperSC>
              <Text
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
                {...register("login", {
                  required: "Заполните все обязательные поля",
                  maxLength: { value: 250, message: "Логин слишком длинный" },
                })}
                placeholder="Введите логин"
              />
            </InputWrapperSC>
            <InputWrapperSC>
              <Text
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
                {...register("password", {
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
