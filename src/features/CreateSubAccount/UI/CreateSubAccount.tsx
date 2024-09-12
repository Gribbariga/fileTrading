import { ButtonUI } from "src/shared/ButtonUI/ButtonUI.tsx";

export const CreateSubAccount = () => {
  const handleCreateSubAccount = () => {};

  return (
    <>
      <ButtonUI
        onClick={handleCreateSubAccount}
        size={"3"}
        variant="soft"
        highContrast={false}
      >
        Создать аккаунт
      </ButtonUI>
    </>
  );
};
