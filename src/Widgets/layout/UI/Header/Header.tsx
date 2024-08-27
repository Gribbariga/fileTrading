import { IconButton } from "@radix-ui/themes";
import { HeaderStyle } from "./HeadersStyle";
import { GlobeIcon, PersonIcon, QuestionMarkIcon } from "@radix-ui/react-icons";

export const Header = () => {
  return (
    <HeaderSC>
      <MenuWrapperSC>
        <IconButton
          size={"3"}
          variant="outline"
          color="orange"
          highContrast={false}
          loading={false}
        >
          <QuestionMarkIcon />
        </IconButton>
        <IconButton
          size={"3"}
          variant="outline"
          color="orange"
          highContrast={false}
          loading={false}
        >
          <GlobeIcon />
        </IconButton>
        <IconButton
          size={"3"}
          variant="outline"
          color="orange"
          highContrast={false}
          loading={false}
        >
          <PersonIcon />
        </IconButton>
      </MenuWrapperSC>
    </HeaderSC>
  );
};

const { HeaderSC, MenuWrapperSC } = HeaderStyle();
