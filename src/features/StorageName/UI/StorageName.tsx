import { TextField } from "@radix-ui/themes";
import { ChangeEvent, useEffect, useState } from "react";
import { storageSlice } from "src/entities/storage/model/storageSlice";
import { renameFolder } from "src/shared/API/storage/folder/api";
import styled from "styled-components";

export const StorageName = () => {
  const { storage, setName } = storageSlice((state) => state);

  const [value, setValue] = useState("");

  useEffect(() => {
    if (storage) {
      setValue(storage?.folder_name);
    }
  }, []);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSave = () => {
    if (storage) {
      renameFolder({ folder_id: storage?.folder_id, new_name: value })
        .then(() => {
          setName(value);
        })
        .catch(() => {
          setName(storage.folder_name);
        });
    }
  };
  return (
    <>
      <TextFieldSC
        size={"3"}
        variant="surface"
        placeholder="Хранилище"
        value={value}
        onBlur={handleSave}
        onChange={(e) => handleOnChange(e)}
      />
    </>
  );
};

export const TextFieldSC = styled(TextField.Root)`
  width: 100%;
`;
