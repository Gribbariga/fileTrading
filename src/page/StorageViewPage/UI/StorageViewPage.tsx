import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "shared/lib/Container/Container";
import { storageSlice } from "src/entities/storage/model/storageSlice";
import styled from "styled-components";
import { Layout } from "widgets/layout/publicApi";
import { StorageActionBar } from "widgets/StorageActionBar/publicApi";
import { StorageControl } from "widgets/StorageControl/publicApi";
import { StorageFileList } from "widgets/StorageFileList/UI/StorageFileList";
import { StorageHeader } from "widgets/StorageHeader/UI/StorageHeader";
import { StorageViewSkeleton } from "./StorageViewSkeleton/StorageViewSkeleton";
import { headerDesktopHeight } from "src/shared/constant/headerSize";
import { DownloadPassword } from "src/widgets/DownloadPassword/UI/DownloadPassword";
import { useResize } from "src/shared/lib/hooks/useResize/useResize";
import { userSlice } from "src/entities/user/model/userSlice";

const StorageViewPage = () => {
  const { isLoading, isNotFound, yourFolderId, downloadPassword, getStorage } =
    storageSlice((state) => state);
  const { storageLink } = useParams();
  const navigation = useNavigate();

  const { height } = useResize();

  const { user_id } = userSlice((state) => state);

  useEffect(() => {
    console.log(user_id);
    if (storageLink) {
      const id = yourFolderId;
      getStorage(storageLink, "0", id !== storageLink, user_id || undefined);
    }
  }, [storageLink]);

  useEffect(() => {
    if (isNotFound) {
      navigation("/NotFound");
    }
  }, [isNotFound]);

  useEffect(() => {
    console.log(user_id);
  }, [user_id]);

  return (
    <>
      <Layout>
        <Container maxWidth={1357}>
          {!isLoading && !downloadPassword && (
            <>
              <StorageActionBar />
              <StorageHeader />
              <ContentWrapperSC>
                <StorageFileList />
                <StorageControl />
              </ContentWrapperSC>
            </>
          )}
          {downloadPassword && (
            <>
              <WrapperCS $height={height}>
                <DownloadPassword />
              </WrapperCS>
            </>
          )}
          {isLoading && <StorageViewSkeleton />}
        </Container>
      </Layout>
    </>
  );
};

const ContentWrapperSC = styled("div")`
  width: 100%;
  max-width: 1357px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
`;

const WrapperCS = styled("div")<{ $height: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${({ $height }) => `${$height - headerDesktopHeight}px`};
`;

export default StorageViewPage;
