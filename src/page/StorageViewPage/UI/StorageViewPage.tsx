import { useParams } from "react-router-dom";

const StorageViewPage = () => {
  const { storageLink } = useParams();
  return (
    <>
      <p>{storageLink}</p>
    </>
  );
};

export default StorageViewPage;
