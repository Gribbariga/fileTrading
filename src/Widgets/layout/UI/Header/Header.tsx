import { HeaderStyle } from "./HeadersStyle";
import { GlobeIcon, PersonIcon, QuestionMarkIcon } from "@radix-ui/react-icons";

export const Header = () => {
  return (
    <HeaderSC>
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
        <IcomButtonSC
          size={"3"}
          variant="outline"
          color="orange"
          highContrast={false}
          loading={false}
        >
          <PersonIcon />
        </IcomButtonSC>
      </MenuWrapperSC>
    </HeaderSC>
  );
};

const { HeaderSC, IcomButtonSC, MenuWrapperSC } = HeaderStyle();
