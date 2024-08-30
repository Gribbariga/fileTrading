import { TextField } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { storageSlice } from "src/entities/storage/modal/storageSlice";

export const StorageNeme = () => {
  const { storage } = storageSlice((state) => state);

  const [value, setValue] = useState("");

  useEffect(() => {
    if (storage) {
      setValue(storage?.folder_name);
    }
  }, []);

  return (
    <>
      <TextField.Root
        size={"3"}
        variant="surface"
        placeholder="Хранилище"
        value={value}
      />
    </>
  );
};
