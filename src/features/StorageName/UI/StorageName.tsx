import { TextField } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { storageSlice } from "src/entities/storage/model/storageSlice";
import styled from "styled-components";

export const StorageName = () => {
  const { storage } = storageSlice((state) => state);

  const [value, setValue] = useState("");

  useEffect(() => {
    if (storage) {
      setValue(storage?.folder_name);
    }
  }, []);

  return (
    <>
      <TextFieldSC
        size={"3"}
        variant="surface"
        placeholder="Хранилище"
        value={value}
      />
    </>
  );
};

export const TextFieldSC = styled(TextField.Root)`
  width: 100%;
`;
