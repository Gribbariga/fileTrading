import { TextArea } from "@radix-ui/themes";
import { ChangeEvent, useEffect, useState } from "react";
import { storageSlice } from "src/entities/storage/model/storageSlice";
import { downloadFile } from "src/shared/API/storage/files/api";
import {
  addDescription,
  editDescription,
} from "src/shared/API/storage/folderDescription/api";

export const StorageDescription = () => {
  const { storage, isGuest } = storageSlice((state) => state);

  const [value, setValue] = useState("");

  const [oldValie, setOldValue] = useState("");

  const handleSave = () => {
    if (oldValie !== value && storage) {
      if (!storage.description_id) {
        addDescription({
          description: value,
          folder_id: storage.folder_id,
        }).then(() => {
          setOldValue(value);
        });
      } else if (storage) {
        editDescription({
          folder_id: storage?.folder_id,
          new_description: value,
        }).then(() => {
          setOldValue(value);
        });
      }
    }
  };

  const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (storage?.description_id && storage.folder_id) {
      downloadFile({
        folder_id: storage.folder_id,
        file_db_id: storage.description_id,
      })
        .then(({ data }) => {
          try {
            const reader = new FileReader();
            reader.onload = function (event) {
              // Содержимое файла доступно через event.target.result
              setValue(
                typeof event.target?.result === "string"
                  ? event.target?.result
                  : ""
              );
            };
            reader.readAsText(data);
          } catch {
            setValue("");
          }
        })
        .catch(() => {
          ("err");
        });
    }
  }, [storage]);

  return (
    <>
      <TextArea
        readOnly={isGuest}
        value={value}
        size={"3"}
        variant="surface"
        resize={"none"}
        placeholder="Например, инструкция"
        onBlur={handleSave}
        onChange={handleOnChange}
      />
    </>
  );
};
