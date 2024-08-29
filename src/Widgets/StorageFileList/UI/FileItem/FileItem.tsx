import { Avatar, IconButton, Text } from "@radix-ui/themes";
import { FileItemStyle } from "./FileItemStyle.ts";
import { Cross1Icon, DownloadIcon, FileIcon } from "@radix-ui/react-icons";
import { FC } from "react";
import { DownloadFile } from "src/Features/DownloadFile/publicApi.ts";

interface IFileItemProps {
  fileDbId: number;
  name: string;
  size: number;
  createAt: string;
}

export const FileItem: FC<IFileItemProps> = ({
  createAt,
  fileDbId,
  name,
  size,
}) => {
  return (
    <ItemWrapperSC>
      <SegmentWrapperSC>
        <Avatar
          size={"4"}
          variant="soft"
          highContrast={false}
          fallback={"Icon"}
        >
          <FileIcon />
          <Text size={"2"} weight={"medium"} align={"left"} highContrast={true}>
            {name}
          </Text>
        </Avatar>
      </SegmentWrapperSC>
      <SegmentWrapperSC>
        <Text size={"2"} weight={"regular"} align={"left"} highContrast={false}>
          {(size / 1024 / 1024).toFixed(1)}
        </Text>
      </SegmentWrapperSC>
      <SegmentWrapperSC>
        <Text
          size={"2"}
          weight={"regular"}
          align={"left"}
          highContrast={false}
        ></Text>
      </SegmentWrapperSC>
      <IconWrapperCS>
        <DownloadFile fileDbId={fileDbId} />
      </IconWrapperCS>
    </ItemWrapperSC>
  );
};

const { IconWrapperCS, ItemWrapperSC, SegmentWrapperSC } = FileItemStyle();
