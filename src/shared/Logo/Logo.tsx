import { LogoStyle } from "./LogoStyle.ts";

import LogoIcon from "shared/assets/Logo.svg?react";

export const Logo = () => {
  return (
    <LogoLinkWrapperSC>
      <LogoIcon />
    </LogoLinkWrapperSC>
  );
};

const { LogoLinkWrapperSC } = LogoStyle();
