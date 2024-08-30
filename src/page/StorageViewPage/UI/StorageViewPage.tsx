import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { storageSlice } from "src/entities/storage/modal/storageSlice";
import styled from "styled-components";
import { Layout } from "widgets/layout/publicApi";
import { StorageActionBar } from "widgets/StorageActionBar/publicApi";
import { StorageControl } from "widgets/StorageControl/publicApi";
import { StorageFileList } from "widgets/StorageFileList/UI/StorageFileList";
import { StorageHeader } from "widgets/StorageHeader/UI/StorageHeader";

const StorageViewPage = () => {
  const { isLoading, getStorage } = storageSlice((state) => state);
  const { storageLink } = useParams();

  useEffect(() => {
    console.log(storageLink);
    if (storageLink) {
      getStorage(storageLink, "0");
    }
  }, [storageLink]);

  return (
    <>
      <Layout>
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