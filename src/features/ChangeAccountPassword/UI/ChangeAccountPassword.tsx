import { ChangeAccountPasswordStyle } from "./ChangeAccountPasswordStyle.ts";
import { ButtonUI } from "src/shared/ButtonUI/ButtonUI.tsx";
import { ChangeEvent, useState } from "react";
import { recoveryWith2Fa } from "src/shared/API/user/auth/auth.ts";

export const ChangeAccountPassword = () => {
  const [value, setValue] = useState("");

  const handleSave = () => {
    recoveryWith2Fa({ new_password: value });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <FormSC>
        <TextFieldRoot
          value={value}
          size={"3"}
          onChange={handleChange}
          variant="surface"
          placeholder="Введите пароль"
        />

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

const { FormSC, TextFieldRoot } = ChangeAccountPasswordStyle();
