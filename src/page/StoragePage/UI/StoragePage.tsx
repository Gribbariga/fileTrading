import { UploadWindow } from "src/features/UploadWindow/publicApi";
import { Layout } from "widgets/layout/publicApi";

const StoragePage = () => {
  return (
    <>
      <Layout>
        <UploadWindow />
      </Layout>
    </>
  );
};
export default StoragePage;
