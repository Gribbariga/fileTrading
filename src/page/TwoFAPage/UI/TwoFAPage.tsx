import { headerDesktopHeight } from "src/shared/constant/headerSize";
import { useResize } from "src/shared/lib/hooks/useResize/useResize";
import { Layout } from "src/widgets/layout/publicApi";
import { TwoFaForm } from "src/widgets/TwoFaForm/publicApi.ts";
import { styled } from "styled-components";

const TwoFAPage = () => {
  const { height } = useResize();

  return (
    <>
      <Layout>
        <WrapperCS $height={height}>
          <TwoFaForm />
        </WrapperCS>
      </Layout>
    </>
  );
};

export default TwoFAPage;

const WrapperCS = styled("div")<{ $height: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${({ $height }) => `${$height - headerDesktopHeight}px`};
`;
