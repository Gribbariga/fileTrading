import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { storageSlice } from "src/entities/storage/modal/storageSlice";
import { Layout } from "widgets/layout/publicApi";
import { StorageActionBar } from "widgets/StorageActionBar/publicApi";
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
            <StorageFileList />
          </>
        )}
      </Layout>
    </>
  );
};

export default StorageViewPage;
