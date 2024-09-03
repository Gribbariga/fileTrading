import { Button, Callout, Text, TextField } from "@radix-ui/themes";
import { RegisterFormStyle } from "./RegisterFormStyle.ts";
import { useForm } from "react-hook-form";

export const RegisterForm = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
  });

  return (
    <>
      <form>
        <InputWrapperSC>
          <Text>Придумайте логин</Text>
          <TextField.Root {...register("login")} placeholder="Ваш логин" />
        </InputWrapperSC>
        <InputWrapperSC>
          <Text>Задайте пароль</Text>
          <TextField.Root {...register("password")} placeholder="Пароль" />
        </InputWrapperSC>
        <Callout.Root>
          <Callout.Text></Callout.Text>
        </Callout.Root>

        <ButtonsGroupSC>
          <Button></Button>
          <Button></Button>
        </ButtonsGroupSC>
      </form>
    </>
  );
};

const { InputWrapperSC, ButtonsGroupSC } = RegisterFormStyle();
