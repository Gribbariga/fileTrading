import { styled } from "styled-components";
import { headerDesktopHeight } from "src/shared/constant/headerSize.ts";
import { Layout } from "src/widgets/layout/publicApi.ts";
import { LoginForm } from "src/widgets/LoginForm/UI/LoginForm.tsx";
import { useResize } from "src/shared/lib/hooks/useResize/useResize.ts";

const LoginPage = () => {
  const { height } = useResize();

  return (
    <>
      <Layout>
        <WrapperCS $height={height}>
          <LoginForm />
        </WrapperCS>
      </Layout>
    </>
  );
};

const WrapperCS = styled("div")<{ $height: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${({ $height }) => `${$height - headerDesktopHeight}px`};
`;

export default LoginPage;
