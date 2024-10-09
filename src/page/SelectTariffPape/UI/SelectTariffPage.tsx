import { Container } from "src/shared/lib/Container/Container";
import { Layout } from "src/widgets/layout/publicApi";
import { SelectTariff } from "src/widgets/SelectTariff/publicApi";

const SelectTariffPage = () => {
  return (
    <Layout>
      <Container maxWidth={1357}>
        <SelectTariff />
      </Container>
    </Layout>
  );
};

export default SelectTariffPage;
