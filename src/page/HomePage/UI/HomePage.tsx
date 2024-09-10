import { Container } from "src/shared/lib/Container/Container";
import { Layout } from "src/widgets/layout/publicApi";
import { MyStorageList } from "src/widgets/MyStorageList/publicApi";

const HomePage = () => {
  return (
    <>
      <Layout>
        <Container>
          <MyStorageList />
        </Container>
      </Layout>
    </>
  );
};

export default HomePage;
