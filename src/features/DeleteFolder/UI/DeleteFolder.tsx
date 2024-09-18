import { Dialog, Heading, Text } from "@radix-ui/themes";

import { storageSlice } from "src/entities/storage/model/storageSlice";
import { deleteFolder } from "src/shared/API/storage/folder/api";
import { DeleteFolderStyle } from "./DeleteFolderStyle";
import { ButtonUI } from "src/shared/ButtonUI/ButtonUI";
import { IconButtonUI } from "src/shared/IconButtonUI/IconButtonUI";
import { useNavigate } from "react-router-dom";

export const DeleteFolder = () => {
  const { storage } = storageSlice((state) => state);

  const navigation = useNavigate();

  const handleDelete = () => {
    if (storage?.folder_id) {
      deleteFolder({ folder_id: storage.folder_id }).then(() => {
        navigation("/");
      });
    }
  };

  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger>
          <IconButtonUI size={"3"} variant="outline">
            <TrashSC />
          </IconButtonUI>
        </Dialog.Trigger>
        <DialogContentSC size={"3"}>
          <Heading mb={"3"}>Удалить хранилище?</Heading>
          <Text
            mb={"4"}
            style={{ display: "block" }}
            size={"2"}
            weight={"regular"}
            align={"left"}
          >
            Данные будут удалены безвозвратно
          </Text>
          <ButtonWrapperSC>
            <Dialog.Close>
              <ButtonUI size={"2"} variant="soft" highContrast={false}>
                Отмена
              </ButtonUI>
            </Dialog.Close>
            <ButtonUI
              onClick={handleDelete}
              size={"2"}
              variant="solid"
              highContrast={false}
            >
              Удалить
            </ButtonUI>
          </ButtonWrapperSC>
        </DialogContentSC>
      </Dialog.Root>
    </>
  );
};

const { TrashSC, ButtonWrapperSC, DialogContentSC } = DeleteFolderStyle();
