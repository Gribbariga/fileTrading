import { Logo } from "shared/Logo/Logo";
import { HeaderStyle } from "./HeadersStyle";
import { ProfileConfig } from "./ProfileConfig/ProfileConfig";
import { subscriptionSlice } from "src/entities/subscription/model/subcriptionSlice";

export const Header = () => {
  const { subscribeStatus } = subscriptionSlice((state) => state);

  return (
    <HeaderSC>
      <Logo />
      <MenuWrapperSC>
        {/* <IcomButtonSC
          size={"3"}
          variant="outline"
          color="orange"
          highContrast={false}
          loading={false}
        >
          <QuestionMarkIcon />
        </IcomButtonSC>
        <IcomButtonSC
          size={"3"}
          variant="outline"
          color="orange"
          highContrast={false}
          loading={false}
        >
          <GlobeIcon />
        </IcomButtonSC> */}
        {subscribeStatus?.name !== "Unauthorized" && (
          <>
            <ProfileConfig />
          </>
        )}
      </MenuWrapperSC>
    </HeaderSC>
  );
};

const { HeaderSC, MenuWrapperSC } = HeaderStyle();
