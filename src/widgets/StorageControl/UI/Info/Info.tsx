import { storageSlice } from "src/entities/storage/model/storageSlice.ts";
import { InfoStyle } from "./InfoStyle.ts";
import { formattedData } from "shared/lib/helper/formattedData/formattedData.ts";
import { Text } from "@radix-ui/themes";
import { StorageDescription } from "src/features/StorageDescription/UI/StorageDescription.tsx";
import { subscriptionSlice } from "src/entities/subscription/model/subcriptionSlice.ts";

export const Info = () => {
  const { storage } = storageSlice((state) => state);
  const { tariffs, subscribeStatus } = subscriptionSlice((state) => state);
  let result: {
    name: string;
    value: string | number;
    isHidden?: boolean;
  }[] = [];
  const currentTariff =
    tariffs !== null ? tariffs[subscribeStatus?.tariff_id || 0] : null;

  const maxFolderSize = +(currentTariff?.max_folder_size || 0);

  console.log(currentTariff);
  if (storage) {
    result = [
      {
        name: "Создано",
        value: formattedData(storage?.created_at || ""),
      },
      {
        name: "Изменено",
        value: formattedData(storage?.updated_at || ""),
      },
      {
        name: "Автор",
        value: storage.name,
      },
      {
        name: "Размер",
        value: ((storage?.size || 0) / 1024 / 1024 / 1024).toFixed(2),
      },
      {
        name: "Скачано раз",
        value: storage?.download_count,
      },
      {
        name: "Просмотры",
        value: `${storage.view_count}`,
      },

      {
        name: "Заполнено",
        value: `${((storage.size / maxFolderSize) * 100).toFixed(3)}%`,
        isHidden: !storage.owner_view,
      },
    ];
  }
  //249565
  //"314572800"
  return (
    <>
      {storage && (
        <>
          <InfoWrapperSC>
            {result.map((item) => {
              if (!item.isHidden) {
                return (
                  <InfoItemSC key={item.name}>
                    <Text
                      size={"3"}
                      weight={"medium"}
                      align={"left"}
                      highContrast={false}
                    >
                      {item.name}
                    </Text>
                    <Text
                      size={"3"}
                      weight={"medium"}
                      align={"right"}
                      highContrast={true}
                    >
                      {item.value}
                    </Text>
                  </InfoItemSC>
                );
              }
            })}
          </InfoWrapperSC>
          <Text
            size={"3"}
            weight={"medium"}
            align={"left"}
            highContrast={true}
            mb={"-8"}
          >
            Описание хранилища
          </Text>
          <StorageDescription />
        </>
      )}
    </>
  );
};

const { InfoWrapperSC, InfoItemSC } = InfoStyle();
