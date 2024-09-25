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
import { StoragePasswordView } from "src/widgets/StoragePasswordView/publicApi";
import { BreadCrumbs } from "src/features/BreadCrumbs/UI/BreadCrumbs";

const StorageViewPage = () => {
  const {
    storage,
    isLoading,
    isNotFound,
    downloadPassword,
    isPassword,
    getStorage,
  } = storageSlice((state) => state);
  const { storageLink } = useParams();
  const navigation = useNavigate();

  const { height } = useResize();

  useEffect(() => {
    if (storageLink) {
      getStorage(storageLink, "0");
    }
  }, [storageLink]);

  useEffect(() => {
    if (isNotFound) {
      navigation("/NotFound");
    }
  }, [isNotFound]);
  console.log(isPassword);
  return (
    <>
      <Layout>
        <Container maxWidth={1357}>
          {!isLoading && !downloadPassword && !isPassword && (
            <>
              <BreadCrumbs storageName={storage?.name} />
              <StorageActionBar />
              <StorageHeader />
              <ContentWrapperSC>
                <StorageFileList />
                <StorageControl />
              </ContentWrapperSC>
            </>
          )}
          {!isLoading && isPassword && (
            <>
              <WrapperCS $height={height}>
                <StoragePasswordView />
              </WrapperCS>
            </>
          )}
          {!isLoading && downloadPassword && (
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
