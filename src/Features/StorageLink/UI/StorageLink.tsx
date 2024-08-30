import { IconButton, Text, TextField } from "@radix-ui/themes";
import { StorageLinkStyle } from "./StorageLinkStyle.ts";
import { CopyIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { createOneTimeLink } from "shared/API/storage/folder/api.ts";
import { storageSlice } from "src/entities/storage/modal/storageSlice.ts";
import { copyToClipboard } from "shared/lib/helper/copyToClipboard/copyToClipboard.ts";

export const StorageLink = () => {
  const { storage } = storageSlice((state) => state);
  const [oneTimeLink, setOneTimeLink] = useState("");
  const location = useLocation();

  const fullUrl = `${window.location.origin}${location.pathname}${location.search}${location.hash}`;

  useEffect(() => {
    if (storage?.folder_id) {
      createOneTimeLink({ folder_id: storage.folder_id }).then(({ data }) => {
        setOneTimeLink(data.onetime_link);
      });
    }
  }, [storage]);

  console.log(location);

  return (
    <>
      <LinkWrapperSC>
        <Text align={"left"} highContrast={true} size={"3"} weight={"medium"}>
          Ссылка для скачивания
        </Text>
        <TextFieldSC value={fullUrl} size={"3"} variant="surface" readOnly>
          <TextField.Slot>
            <IconButton
              onClick={() => copyToClipboard(location.key)}
              size={"2"}
              variant="ghost"
              highContrast={false}
            >
              <CopyIcon height="16" width="16" />
            </IconButton>
          </TextField.Slot>
        </TextFieldSC>
      </LinkWrapperSC>
      <LinkWrapperSC>
        <Text align={"left"} highContrast={true} size={"3"} weight={"medium"}>
          Одноразовая ссылка
        </Text>
        <TextFieldSC value={oneTimeLink} size={"3"} variant="surface" readOnly>
          <TextField.Slot>
            <IconButton
              onClick={() => copyToClipboard(oneTimeLink)}
              size={"2"}
              variant="ghost"
              highContrast={false}
            >
              <CopyIcon height="16" width="16" />
            </IconButton>
          </TextField.Slot>
        </TextFieldSC>
      </LinkWrapperSC>
    </>
  );
};

const { TextFieldSC, LinkWrapperSC } = StorageLinkStyle();
