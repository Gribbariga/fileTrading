import { StorageControlStyle } from "./StorageControlStyle.ts";
import { TabsList } from "./Tabs/TabsList.tsx";
import { Info } from "./Info/Info.tsx";
import { Tabs } from "@radix-ui/themes";
import { StorageConfig } from "./StorageConfig/StorageConfig.tsx";
import { Links } from "./Links/Links.tsx";
import { storageSlice } from "src/entities/storage/model/storageSlice.ts";
import { useResize } from "src/shared/lib/hooks/useResize/useResize.ts";

export const StorageControl = () => {
  const { isGuest } = storageSlice((state) => state);
  const {isMobile} = useResize();
  console.log(isGuest);
  
  return (
    <>
    {!isMobile && (
       <WrapperSC>
       <Tabs.Root defaultValue={"info"}>
       <TabsList />
       <TabsContentWrapperSC>
         <TabsContent value="info">
           <Info />
         </TabsContent>
         {!isGuest && (
           <>
             <TabsContent value="settings">
               <StorageConfig />
             </TabsContent>
             <TabsContent value="link">
               <Links />
             </TabsContent>
           </>
         )}
       </TabsContentWrapperSC>
     </Tabs.Root>
    <></>
  </WrapperSC>
    )} 
    </>

  );
};

const { WrapperSC, TabsContent, TabsContentWrapperSC } = StorageControlStyle();
