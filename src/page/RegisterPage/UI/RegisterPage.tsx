import { headerDesktopHeight } from "src/shared/constant/headerSize";
import { useResize } from "src/shared/lib/hooks/useResize/useResize";
import { Layout } from "src/widgets/layout/publicApi";
import { RegisterForm } from "src/widgets/RegisterForm/UI/RegisterForm";
import { styled } from "styled-components";

const RegisterPage = () => {
  const { height } = useResize();

  return (
    <Layout>
      <WrapperCS height={height}>
        <RegisterForm />
      </WrapperCS>
    </Layout>
  );
};
const WrapperCS = styled("div")<{ height: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${({ height }) => `${height - headerDesktopHeight}px`};
`;

export default RegisterPage;
