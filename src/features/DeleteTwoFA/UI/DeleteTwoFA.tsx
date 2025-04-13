import { userSlice } from "src/entities/user/model/userSlice";
import { DeleteTwoFAStyle } from "src/features/DeleteTwoFA/UI/DeleteTwoFAStyle";
import { deleteKeyTwoFa } from "src/shared/API/auth/2FA/2FA";
import { setCookie } from "src/shared/lib/helper/setCookie/setCookie";

export const DeleteTwoFA = () => {
  const { setTwoFa } = userSlice((state) => state);

  const handleClick = () => {
    deleteKeyTwoFa().then(() => {
      setTwoFa(false);
      setCookie("2FA", false);
    });
  };

  return (
    <>
      <ButtonUISC
        onClick={handleClick}
        type="button"
        size={"3"}
        variant="surface"
        mb={"3"}
      >
        Отключить Google Authentificator
      </ButtonUISC>
    </>
  );
};

const { ButtonUISC } = DeleteTwoFAStyle();
