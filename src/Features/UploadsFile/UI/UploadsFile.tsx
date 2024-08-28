import { Button } from "@radix-ui/themes";
import { storageSlice } from "src/entities/storage/modal/storageSlice";

export const UploadsFile = () => {
  const { folderId } = storageSlice((state) => state);

  return (
    <>
      <Button size={"3"} variant="soft" highContrast={false} loading={false}>
        Добавить файлы
      </Button>
    </>
  );
};
