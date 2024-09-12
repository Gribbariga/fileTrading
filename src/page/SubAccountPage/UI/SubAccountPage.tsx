import { Container } from "src/shared/lib/Container/Container";
import { Layout } from "src/widgets/layout/publicApi";
import { SubAccount } from "src/widgets/SubAccount/publicApi";

const SubAccountPage = () => {
  return (
    <Layout>
      <Container maxWidth={1357}>
        <SubAccount />
      </Container>
    </Layout>
  );
};

export default SubAccountPage;
