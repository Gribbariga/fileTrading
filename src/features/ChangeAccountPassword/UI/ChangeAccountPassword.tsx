import { TextField } from "@radix-ui/themes";
import { ChangeAccountPasswordStyle } from "./ChangeAccountPasswordStyle.ts";
import { ButtonUI } from "src/shared/ButtonUI/ButtonUI.tsx";
import { useState } from "react";

export const ChangeAccountPassword = () => {
  const [value, setValue] = useState("");

  const handleSave = () => {
    setValue("");
  };

  return (
    <>
      <FormSC>
        <TextField.Root
          value={value}
          size={"3"}
          variant="surface"
          placeholder="Введите пароль"
        />

        <ButtonUI onClick={handleSave} size={"3"} variant="surface">
          Сохранить
        </ButtonUI>
      </FormSC>
    </>
  );
};

const { FormSC } = ChangeAccountPasswordStyle();
