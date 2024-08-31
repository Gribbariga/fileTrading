import { IconButton, IconButtonProps } from "@radix-ui/themes";
import { FC } from "react";
import styled from "styled-components";

type IIconButtonUIProps = IconButtonProps;

export const IconButtonUI: FC<IIconButtonUIProps> = (props) => {
  const { children } = props;
  return <IconButtonUISC {...props}>{children}</IconButtonUISC>;
};

const IconButtonUISC = styled(IconButton)`
  cursor: pointer;
`;
