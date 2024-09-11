import { FC } from "react";
import { BreadCrumbsStyle } from "./BreadCrumbsStyle.ts";
import { ButtonUI } from "src/shared/ButtonUI/ButtonUI.tsx";
import { Text } from "@radix-ui/themes";
import { ArchiveIcon, HomeIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";

interface IBreadCrumbsProps {
  storageName?: string;
}

export const BreadCrumbs: FC<IBreadCrumbsProps> = ({ storageName }) => {
  const navigation = useNavigate();

  const handleToHome = () => {
    navigation("/home");
  };

  return (
    <>
      <BreadCrumbsWrapperSC>
        <ButtonUI
          onClick={handleToHome}
          disabled={!storageName}
          variant="ghost"
          highContrast={false}
          size={"2"}
        >
          <HomeIcon />
          Мои хранилища
        </ButtonUI>
        {storageName && (
          <>
            <Text size={"2"} weight={"regular"}>
              {">"}
            </Text>
            <ButtonUI
              disabled={true}
              variant="ghost"
              highContrast={false}
              size={"2"}
            >
              <ArchiveIcon /> {storageName}
            </ButtonUI>
          </>
        )}
      </BreadCrumbsWrapperSC>
    </>
  );
};

const { BreadCrumbsWrapperSC } = BreadCrumbsStyle();
