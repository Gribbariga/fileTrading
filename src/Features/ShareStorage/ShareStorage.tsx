import { Share1Icon } from "@radix-ui/react-icons";
import { IconButton } from "@radix-ui/themes";
import { useLocation } from "react-router-dom";

export const ShareStorage = () => {
  const location = useLocation(); // Получаем текущий маршрут
  const currentURL = window.location.origin + location.pathname;

  const handleClick = () => {
    navigator.clipboard.writeText(currentURL);
  };
  return (
    <>
      <IconButton
        onClick={handleClick}
        size={"3"}
        variant="outline"
        highContrast={false}
        loading={false}
      >
        <Share1Icon />
      </IconButton>
    </>
  );
};
