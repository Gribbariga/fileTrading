import { Avatar, Text } from "@radix-ui/themes";
import { FolderItemStyle } from "./FolderItemStyle.ts";
import { ArchiveIcon } from "@radix-ui/react-icons";
import { FC } from "react";

interface FolderItemProps {
  name: string;
  size: number;
  createAt: string;
  timeStorage: string;
}

export const FolderItem: FC<FolderItemProps> = ({
  name,
  size,
  createAt,
  timeStorage,
}) => {
  return (
    <CardSC>
      <SegmentWrapperSC>
        <NameAndImgWrapperSC>
          <Avatar fallback={""}>
            <ArchiveIcon />
          </Avatar>
          <Text>{name}</Text>
        </NameAndImgWrapperSC>
      </SegmentWrapperSC>
      <SegmentWrapperSC>
        <Text></Text>
      </SegmentWrapperSC>
      <SegmentWrapperSC>
        <Text></Text>
      </SegmentWrapperSC>
      <SegmentWrapperSC>
        <Text></Text>
      </SegmentWrapperSC>
    </CardSC>
  );
};

const { CardSC, SegmentWrapperSC, NameAndImgWrapperSC } = FolderItemStyle();
