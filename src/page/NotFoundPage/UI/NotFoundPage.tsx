import { Layout } from "widgets/layout/publicApi.ts";
import { NotFounPageStyle } from "./NotFounPageStyle.ts";
import { useResize } from "shared/lib/hooks/useResize/useResize.ts";

export const NotFoundPage = () => {
  const { height } = useResize();

  return (
    <Layout>
      <WrapperSC $screenHeight={height}>
        <ContentWrapperSC>
          <Text404SC>404</Text404SC>
          <NotFoundTextSC>Страница не существует</NotFoundTextSC>
        </ContentWrapperSC>
      </WrapperSC>
    </Layout>
  );
};

const { Text404SC, WrapperSC, NotFoundTextSC, ContentWrapperSC } =
  NotFounPageStyle();
