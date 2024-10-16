import { Container } from "src/shared/lib/Container/Container";
import { Layout } from "src/widgets/layout/publicApi";
import { SelectTariff } from "src/widgets/SelectTariff/publicApi";
import styled from "styled-components";

const SelectTariffPage = () => {
  return (
    <Layout
      navButton={{ text: "Мои хранилища", handleClick: () => console.log("?") }}
      isContentCenter={true}
      isHiddenHeaders={false}
    >
      <Container maxWidth={1357}>
        <CenterWrapperSC>
          <SelectTariff />
        </CenterWrapperSC>
      </Container>
    </Layout>
  );
};

const CenterWrapperSC = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default SelectTariffPage;
