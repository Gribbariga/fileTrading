import { TextField } from "@radix-ui/themes";
import { ChangeEvent, useEffect, useState } from "react";
import { storageSlice } from "src/entities/storage/model/storageSlice";
import { userSlice } from "src/entities/user/model/userSlice";
import { renameFolder } from "src/shared/API/storage/folder/api";
import styled from "styled-components";

export const StorageName = () => {
  const { storage, setName } = storageSlice((state) => state);

  const { token } = userSlice((state) => state);
  const t = userSlice();

  const [value, setValue] = useState("");

  useEffect(() => {
    if (storage) {
      console.log(t);
      console.log(token);
      setValue(storage?.folder_name);
    }
  }, []);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSave = () => {
    console.log(token);
    if (storage && token) {
      renameFolder({ folder_id: storage?.folder_id, new_name: value }, token)
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
