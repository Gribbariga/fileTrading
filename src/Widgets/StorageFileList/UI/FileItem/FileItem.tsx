import { Avatar, Text } from "@radix-ui/themes";
import { FileItemStyle } from "./FileItemStyle.ts";
import { FC } from "react";
import { DownloadFile } from "src/Features/DownloadFile/publicApi.ts";
import { DeleteFile } from "src/Features/DeleteFile/UI/DeleteFile.tsx";
import { FileIcon } from "@radix-ui/react-icons";

interface IFileItemProps {
  fileDbId: number;
  name: string;
  size: number;
  createAt: string;
}

export const FileItem: FC<IFileItemProps> = ({
  //   createAt,
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
          fallback={<FileIcon />}
        />

        <Text size={"2"} weight={"medium"} align={"left"} highContrast={true}>
          {name}
        </Text>
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
      <IconWrapperSC>
        <DownloadFile fileName={name} fileDbId={fileDbId} />
        <DeleteFile fileDbId={fileDbId} />
      </IconWrapperSC>
    </ItemWrapperSC>
  );
};

const { IconWrapperSC, ItemWrapperSC, SegmentWrapperSC } = FileItemStyle();
