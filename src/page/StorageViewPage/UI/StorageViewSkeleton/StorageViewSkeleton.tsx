import { Skeleton } from "@radix-ui/themes";
import { StorageViewSkeletonStyle } from "./StorageViewSkeletonStyle.ts";
import { useResize } from "shared/lib/hooks/useResize/useResize.ts";

export const StorageViewSkeleton = () => {
  const { height } = useResize();

  return (
    <MainWrapperSC $screenHeight={height}>
      <TopWrapperSC>
        <Skeleton width={"84%"} height={"24px"} loading={true} />
        <Skeleton width={"15%"} height={"24px"} loading={true} />
      </TopWrapperSC>
      <MidWrapperSC>
        <Skeleton width={"100%"} height={"24px"} />
      </MidWrapperSC>
      <BottomWrapperSC>
        <ListWrapperSC>
          <ListHeaderSC />
          <ListItemSC />
          <ListItemSC />
          <ListItemSC />
          <ListItemSC />
          <ListItemSC />
          <ListItemSC />
          <ListItemSC />
          <ListItemSC />
          <ListItemSC />
          <ListItemSC />
          <ListItemSC />
          <ListItemSC />
          <ListItemSC />
          <ListItemSC />
          <ListItemSC />
          <ListItemSC />
          <ListItemSC />
          <ListItemSC />
          <ListItemSC />
          <ListItemSC />
          <ListItemSC />
          <ListItemSC />
          <ListItemSC />
          <ListItemSC />
          <ListItemSC />
          <ListItemSC />
          <ListItemSC />
          <ListItemSC />
          <ListItemSC />
          <ListItemSC />
          <ListItemSC />
          <ListItemSC />
          <ListItemSC />
          <ListItemSC />
          <ListItemSC />
          <ListItemSC />
          <ListItemSC />
        </ListWrapperSC>
        <ConfigWrapperSC>
          <ConfigHeaderSC />
          <ConfigListSC>
            <Skeleton width={"100%"} height={"24px"} loading={true} />
            <Skeleton width={"100%"} height={"24px"} loading={true} />
            <Skeleton width={"100%"} height={"24px"} loading={true} />
            <Skeleton width={"100%"} height={"24px"} loading={true} />
            <Skeleton width={"100%"} height={"24px"} loading={true} />
            <Skeleton width={"100%"} height={"24px"} loading={true} />
            <Skeleton width={"100%"} height={"24px"} loading={true} />
            <Skeleton width={"100%"} height={"24px"} loading={true} />
            <Skeleton width={"100%"} height={"24px"} loading={true} />
            <Skeleton width={"100%"} height={"24px"} loading={true} />
            <Skeleton width={"100%"} height={"24px"} loading={true} />
            <Skeleton width={"100%"} height={"24px"} loading={true} />
            <Skeleton width={"100%"} height={"24px"} loading={true} />
            <Skeleton width={"100%"} height={"24px"} loading={true} />
            <Skeleton width={"100%"} height={"24px"} loading={true} />
            <Skeleton width={"100%"} height={"24px"} loading={true} />
            <Skeleton width={"100%"} height={"24px"} loading={true} />
            <Skeleton width={"100%"} height={"24px"} loading={true} />
            <Skeleton width={"100%"} height={"24px"} loading={true} />
            <Skeleton width={"100%"} height={"24px"} loading={true} />
            <Skeleton width={"100%"} height={"24px"} loading={true} />
            <Skeleton width={"100%"} height={"24px"} loading={true} />
            <Skeleton width={"100%"} height={"24px"} loading={true} />
          </ConfigListSC>
        </ConfigWrapperSC>
      </BottomWrapperSC>
    </MainWrapperSC>
  );
};

const {
  ListItemSC,
  ConfigListSC,
  MidWrapperSC,
  TopWrapperSC,
  ListHeaderSC,
  MainWrapperSC,
  ListWrapperSC,
  ConfigHeaderSC,
  ConfigWrapperSC,
  BottomWrapperSC,
} = StorageViewSkeletonStyle();
