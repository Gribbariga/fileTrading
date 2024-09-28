import { FC } from "react";
import { ButtonUI } from "src/shared/ButtonUI/ButtonUI.tsx";

interface ICreateSubAccountProps {
  handleCreate: () => void;
}

export const CreateSubAccount: FC<ICreateSubAccountProps> = ({
  handleCreate,
}) => {
  return (
    <>
      <ButtonUI
        onClick={handleCreate}
        size={"3"}
        variant="soft"
        highContrast={false}
      >
        Создать аккаунт
      </ButtonUI>
    </>
  );
};
