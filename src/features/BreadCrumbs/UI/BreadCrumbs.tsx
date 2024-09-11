import { FC } from "react";
import { BreadCrumbsStyle } from "./BreadCrumbsStyle.ts";
import { ButtonUI } from "src/shared/ButtonUI/ButtonUI.tsx";
import { Text } from "@radix-ui/themes";
import { ArchiveIcon, HomeIcon } from "@radix-ui/react-icons";

interface IBreadCrumbsProps {
  storageName?: string;
}

export const BreadCrumbs: FC<IBreadCrumbsProps> = ({ storageName }) => {
  return (
    <>
      <BreadCrumbsWrapperSC>
        <ButtonUI
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
