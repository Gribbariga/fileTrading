import { Text, TextField } from "@radix-ui/themes";
import { SubAccountItemStyle } from "./SubAccountItemStyle.ts";
import { useForm } from "react-hook-form";
import { FC, useState } from "react";
import { ButtonUI } from "src/shared/ButtonUI/ButtonUI.tsx";
import { registerSubaccount } from "src/shared/API/account/subaccount/subaccount.tsx";
import { CopyIcon } from "@radix-ui/react-icons";
import { generationLogin } from "src/shared/lib/helper/generationLogin/generationLogin.ts";
import { generationPassword } from "src/shared/lib/helper/generationPassword/generationPassword.ts";

interface ISubmitData {
  subaccount_login: string;
  subaccount_password: string;
}

export interface ISubAccountItemProps {
  login: string;
  number: number;
  isCreate?: boolean;
  subAccountAdd?: (login: string) => void;
  handleCanselCreate?: () => void;
}

export const SubAccountItem: FC<ISubAccountItemProps> = ({
  number,
  login,
  subAccountAdd,
  handleCanselCreate,
  isCreate,
}) => {
  const { register, handleSubmit, setValue } = useForm({
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
        .then(() => {
          if ((data.subaccount_login, subAccountAdd)) {
            subAccountAdd(data.subaccount_login);
            if (handleCanselCreate) {
              handleCanselCreate();
            }
          }
        })
        .catch(() => {});
    } else {
      console.log("todo");
    }
  };

  const handleCreateLogin = () => {
    setValue("subaccount_login", generationLogin());
  };

  const handleCreatePassword = () => {
    setValue("subaccount_password", generationPassword());
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
                readOnly={!isChange && !isCreate}
                {...register("subaccount_login", {
                  required: "Заполните все обязательные поля",
                  maxLength: { value: 250, message: "Логин слишком длинный" },
                })}
                placeholder="Введите логин"
              >
                <TextField.Slot side="right">
                  {isChange || isCreate ? (
                    <ButtonUI
                      style={{ height: 25 }}
                      size={"1"}
                      type="button"
                      onClick={handleCreateLogin}
                      variant="surface"
                      highContrast={false}
                    >
                      Сгенерировать
                    </ButtonUI>
                  ) : (
                    <CopyIcon />
                  )}
                </TextField.Slot>
              </TextFieldSC>
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
                Придумайте пароль
              </Text>
              <TextFieldSC
                readOnly={!isChange && !isCreate}
                size={"3"}
                variant="surface"
                {...register("subaccount_password", {
                  required: "Заполните все обязательные поля",
                  maxLength: { value: 250, message: "Логин слишком длинный" },
                })}
                placeholder="Введите логин"
              >
                <TextField.Slot side="right">
                  {isChange || isCreate ? (
                    <ButtonUI
                      style={{ height: 25 }}
                      size={"1"}
                      type="button"
                      onClick={handleCreatePassword}
                      variant="surface"
                      highContrast={false}
                    >
                      Сгенерировать
                    </ButtonUI>
                  ) : (
                    <CopyIcon />
                  )}
                </TextField.Slot>
              </TextFieldSC>
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
