import { TextArea } from "@radix-ui/themes";
import { useEffect } from "react";
import { storageSlice } from "src/entities/storage/modal/storageSlice";

export const StorageDescription = () => {
  const { storage } = storageSlice((state) => state);

  //   const [value, setValue] = useState("");
  //   const handleSave = () => {
  //     setValue();
  //   };

  useEffect(() => {
    // setValue(storage.)
  }, [storage]);

  return (
    <>
      <TextArea
        value=""
        size={"3"}
        variant="surface"
        resize={"none"}
        placeholder="Например, инструкция"
      />
    </>
  );
};
