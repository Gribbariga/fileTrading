import { useNavigate } from "react-router-dom";
import { subscriptionSlice } from "src/entities/subscription/model/subcriptionSlice";
import { createFolder } from "src/shared/API/storage/folder/api";
import { ButtonUI } from "src/shared/ButtonUI/ButtonUI";

export const CreateFolder = () => {
  const { tariffs, subscribeStatus } = subscriptionSlice((state) => state);
  const navigation = useNavigate();

  const currentTariff =
    tariffs !== null ? tariffs[subscribeStatus?.subscription_id || 0] : null;

  const handleClick = () => {
    createFolder({
      lifetime: currentTariff?.max_lifetime || 7,
      download_password: false,
    }).then(({ data }) => {
      navigation(`/storage/${data.folder_id}`);
    });
  };

  return (
    <>
      <ButtonUI
        onClick={handleClick}
        highContrast={false}
        size={"3"}
        variant="soft"
      >
        Создать хранилище
      </ButtonUI>
    </>
  );
};
