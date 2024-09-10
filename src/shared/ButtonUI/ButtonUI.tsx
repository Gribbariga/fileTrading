import { Button, ButtonProps } from "@radix-ui/themes";
import { FC } from "react";
import styled from "styled-components";

type ButtonUIProps = ButtonProps;

export const ButtonUI: FC<ButtonUIProps> = (props) => {
  const { children } = props;
  return <ButtonSC {...props}>{children}</ButtonSC>;
};

const ButtonSC = styled(Button)<{ disabled?: boolean }>`
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
`;
