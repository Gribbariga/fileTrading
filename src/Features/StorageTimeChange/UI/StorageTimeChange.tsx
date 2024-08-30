import { RadioGroup } from "@radix-ui/themes";

export const StorageTimeChange = () => {
  return (
    <>
      <RadioGroup.Root defaultValue="7">
        <RadioGroup.Item value="7">7 дней</RadioGroup.Item>
        <RadioGroup.Item value="30">30 дней</RadioGroup.Item>
        <RadioGroup.Item value="90">90 дней</RadioGroup.Item>
        <RadioGroup.Item value="365">365 дней</RadioGroup.Item>
      </RadioGroup.Root>
    </>
  );
};
