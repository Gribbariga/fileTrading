import { ButtonUI } from "shared/ButtonUI/ButtonUI";
import { useResize } from "src/shared/lib/hooks/useResize/useResize";

export const ExtendStorage = () => {
  const { isMobile } = useResize();

  return (
    <>
      <ButtonUI
        size={isMobile ? "3" : "4"}
        variant="solid"
        highContrast={false}
        loading={false}
      >
        Продлить
      </ButtonUI>
    </>
  );
};
