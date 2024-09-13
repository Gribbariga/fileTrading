import { Logo } from "shared/Logo/Logo";
import { HeaderStyle } from "./HeadersStyle";
import { GlobeIcon, QuestionMarkIcon } from "@radix-ui/react-icons";
import { ProfileConfig } from "./ProfileConfig/ProfileConfig";

export const Header = () => {
  return (
    <HeaderSC>
      <Logo />
      <MenuWrapperSC>
        <IcomButtonSC
          size={"3"}
          variant="outline"
          color="orange"
          highContrast={false}
          loading={false}
        >
          <QuestionMarkIcon />
        </IcomButtonSC>
        <IcomButtonSC
          size={"3"}
          variant="outline"
          color="orange"
          highContrast={false}
          loading={false}
        >
          <GlobeIcon />
        </IcomButtonSC>
        <ProfileConfig />
      </MenuWrapperSC>
    </HeaderSC>
  );
};

const { HeaderSC, IcomButtonSC, MenuWrapperSC } = HeaderStyle();
