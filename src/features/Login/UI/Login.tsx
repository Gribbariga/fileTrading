import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { userSlice } from "src/entities/user/model/userSlice";
import { AxiosError, isAxiosError } from "axios";
import { FormProvider, useForm } from "react-hook-form";
import { LoginStyle } from "./LoginStyle";
import { subscriptionStatus } from "src/shared/API/subscription/subscription";
import { subscriptionSlice } from "src/entities/subscription/model/subcriptionSlice";
import { userCodeError } from "src/shared/constant/backendCodeError/User";
import { setCookie } from "src/shared/lib/helper/setCookie/setCookie";
import { getInfo, loginFn } from "src/shared/API/account/account/account";
import { verifyTwoFa } from "src/shared/API/auth/2FA/2FA";
import { LoginStep } from "src/features/Login/UI/LoginStep/LoginStep";
import { TwoFAStep } from "src/features/Login/UI/TwoFaStep/TwoFaStep";
import { getCookie } from "src/shared/lib/helper/getCookie/getCookie";

interface IData {
  login: string;
  password: string;
  two_fa_code: string;
}

export const Login = () => {
  const provider = useForm({
    defaultValues: {
      login: "",
      password: "",
      two_fa_code: "",
    },
  });
  const {
    setError,
    formState: { errors },
    handleSubmit,
  } = provider;

  const { setInfo } = userSlice((state) => state);

  const [step, setStep] = useState<"login" | "twoFa">("login");

  const [isLoading, setIsLoading] = useState(false);

  const { setSubscribeStatus } = subscriptionSlice((state) => state);

  const navigation = useNavigate();

  const handleLogin = (data: IData) => {
    setIsLoading(true);
    loginFn(data)
      .then(({ data }) => {
        setCookie("account_id", `${data.account_id}`, {
          "max-age": import.meta.env.VITE_LOGIN_COOKIE_TIME,
        });
        setCookie("2FA", data.two_fa, {
          "max-age": import.meta.env.VITE_LOGIN_COOKIE_TIME,
        });
        if (data.two_fa) {
          setIsLoading(false);
          setStep("twoFa");
        } else {
          subscriptionStatus().then(async ({ data }) => {
            getInfo().then(async (response) => {
              const userInfo = response.data;
              setIsLoading(false);
              await setSubscribeStatus(data);
              setInfo(userInfo);

              navigation("/");
            });
          });
        }
      })
      .catch((error: Error | AxiosError) => {
        setIsLoading(false);
        if (isAxiosError(error)) {
          const errorMessage = error.response?.data.status;
          switch (errorMessage) {
            case userCodeError.USER_NOT_FOUND:
              setError("root", { message: "Пользователь не найден" });
              break;
            case userCodeError.WRONG_PASSWORD:
              setError("root", { message: "Неверные данные" });
              break;
            default:
              setError("root", { message: "500. Внутренняя ошибка сервера" });
          }
        }
      });
  };

  const handleBack = () => {
    setStep("login");
  };

  const handleCheckTwoFA = (data: IData) => {
    setIsLoading(true);
    const accountId = getCookie("account_id");
    if (accountId) {
      const newData = {
        account_id: accountId,
        two_fa_code: data.two_fa_code,
      };
      verifyTwoFa(newData)
        .then(({ data }) => {
          setIsLoading(false);
          if (data.verified) {
            navigation("/");
          } else {
            setError("root", { message: "Неверный код" });
          }
        })
        .catch(() => {
          setIsLoading(false);
          setError("root", { message: "500. Внутренняя ошибка сервера" });
        });
    }
  };

  const error =
    errors.root?.message || errors.login?.message || errors.password?.message;

  return (
    <>
      <FormProvider {...provider}>
        <FormSC
          onSubmit={handleSubmit(
            step === "login" ? handleLogin : handleCheckTwoFA
          )}
        >
          {step === "login" ? (
            <LoginStep isLoading={isLoading} error={error} />
          ) : (
            <TwoFAStep
              handleBack={handleBack}
              isLoading={isLoading}
              error={error}
            />
          )}
        </FormSC>
      </FormProvider>
    </>
  );
};

const { FormSC } = LoginStyle();
