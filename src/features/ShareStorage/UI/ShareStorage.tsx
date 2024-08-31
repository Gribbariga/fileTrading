import { Share1Icon } from "@radix-ui/react-icons";
import { useLocation } from "react-router-dom";
import { IconButtonUI } from "shared/IconButtonUI/IconButtonUI";

export const ShareStorage = () => {
  const location = useLocation(); // Получаем текущий маршрут
  const currentURL = window.location.origin + location.pathname;

  const handleClick = () => {
    navigator.clipboard.writeText(currentURL);
  };
  return (
    <>
      <IconButtonUI
        onClick={handleClick}
        size={"3"}
        variant="outline"
        highContrast={false}
        loading={false}
      >
        <Share1Icon />
      </IconButtonUI>
    </>
  );
};
