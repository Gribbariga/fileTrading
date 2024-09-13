import { Dialog, Heading } from "@radix-ui/themes";
import { ConnectGoogleTwoFAStyle } from "./ConnectGoogleTwoFAStyle.ts";
import { IconButtonUI } from "src/shared/IconButtonUI/IconButtonUI.tsx";
import { Cross1Icon } from "@radix-ui/react-icons";
import { ConnectTwoFA } from "src/features/ConnectTwoFA/publicApi.ts";

export const ConnectGoogleTwoFA = () => {
  return (
    <>
      <TitleWrapperSC>
        <Heading weight={"medium"} size={"5"} align={"left"}>
          Настройки аккаунта
        </Heading>
        <Dialog.Close>
          <IconButtonUI size={"2"} variant="ghost">
            <Cross1Icon height={"16"} width={"16"} />
          </IconButtonUI>
        </Dialog.Close>
      </TitleWrapperSC>
      <ConnectTwoFA />
    </>
  );
};

const { TitleWrapperSC } = ConnectGoogleTwoFAStyle();
