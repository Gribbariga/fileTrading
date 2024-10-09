import { SegmentedControl } from "@radix-ui/themes";
import { SubscriptionManagementStyle } from "./SubscriptionManagementStyle.ts";

export const SubscriptionManagement = () => {
  const [monthCount, setMonthCount] = ;

  const mounthSet = [1, 3, 6, 12, 24];

  return (
    <>
      <SegmentedControl.Root mb={"6"} defaultValue="3">
        {mounthSet.map((item) => {
          return (
            <SegmentedControl.Item key={item} value={`${item}`}>
              {item}
            </SegmentedControl.Item>
          );
        })}
      </SegmentedControl.Root>
    </>
  );
};

const {} = SubscriptionManagementStyle();
