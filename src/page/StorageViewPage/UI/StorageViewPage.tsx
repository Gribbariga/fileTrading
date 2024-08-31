import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "shared/lib/Container/Container";
import { getCookie } from "shared/lib/helper/getCookie/getCookie";
import { storageSlice } from "src/entities/storage/modal/storageSlice";
import styled from "styled-components";
import { Layout } from "widgets/layout/publicApi";
import { StorageActionBar } from "widgets/StorageActionBar/publicApi";
import { StorageControl } from "widgets/StorageControl/publicApi";
import { StorageFileList } from "widgets/StorageFileList/UI/StorageFileList";
import { StorageHeader } from "widgets/StorageHeader/UI/StorageHeader";
import { StorageViewSkeleton } from "./StorageViewSkeleton/StorageViewSkeleton";

const StorageViewPage = () => {
  const { isLoading, setIsGuest, getStorage } = storageSlice((state) => state);
  const { storageLink } = useParams();

  useEffect(() => {
    console.log(storageLink);
    if (storageLink) {
      const id = getCookie("folderId");
      setIsGuest(id !== storageLink);
      getStorage(storageLink, "0");
    }
  }, [storageLink]);

  return (
    <>
      <Layout>
        <Container maxWidth={1357}>
          {!isLoading && (
            <>
              <StorageActionBar />
              <StorageHeader />
              <ContantWrapperSC>
                <StorageFileList />
                <StorageControl />
              </ContantWrapperSC>
            </>
          )}
          {isLoading && <StorageViewSkeleton />}
        </Container>
      </Layout>
    </>
  );
};

const ContantWrapperSC = styled("div")`
  width: 100%;
  max-width: 1357px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
`;

export default StorageViewPage;
