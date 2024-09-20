import { ChangeAccountPasswordStyle } from "./ChangeAccountPasswordStyle.ts";
import { ButtonUI } from "src/shared/ButtonUI/ButtonUI.tsx";
import { ChangeEvent, useState } from "react";
import { changePassword } from "src/shared/API/user/auth/auth.ts";
import { Callout } from "@radix-ui/themes";
import { InfoCircledIcon } from "@radix-ui/react-icons";

export const ChangeAccountPassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPasswor] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSave = () => {
    if (!!oldPassword && !!newPassword) {
      setError("");
      changePassword({ new_password: newPassword, old_password: oldPassword })
        .then(() => {
          setSuccess("Пароль обновлен!");
        })
        .catch(() => {
          // if()
        });
    } else {
      setError("Заполните обязательные поля");
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    setValue: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setValue(e.target.value);
  };

  return (
    <>
      <FormSC>
        <TextFieldRootSC
          value={oldPassword}
          size={"3"}
          mb={"5"}
          onChange={(e) => handleChange(e, setOldPassword)}
          variant="surface"
          placeholder="Старый пароль"
        />
        <TextFieldRootSC
          value={newPassword}
          size={"3"}
          mb={"5"}
          onChange={(e) => handleChange(e, setNewPasswor)}
          variant="surface"
          placeholder="Новый пароль"
        />
        {!!error && (
          <Callout.Root
            color="red"
            mb={"5"}
            highContrast={false}
            size={"1"}
            variant="soft"
          >
            <Callout.Icon>
              <InfoCircledIcon />
            </Callout.Icon>
            <Callout.Text>{error}</Callout.Text>
          </Callout.Root>
        )}
        {!!success && (
          <Callout.Root
            mb={"5"}
            highContrast={false}
            size={"1"}
            color="green"
            variant="soft"
          >
            <Callout.Icon>
              <InfoCircledIcon />
            </Callout.Icon>
            <Callout.Text>{success}</Callout.Text>
          </Callout.Root>
        )}

        <ButtonUI
          type="button"
          onClick={handleSave}
          size={"3"}
          variant="surface"
        >
          Сохранить
        </ButtonUI>
      </FormSC>
    </>
  );
};

const { FormSC, TextFieldRootSC } = ChangeAccountPasswordStyle();
