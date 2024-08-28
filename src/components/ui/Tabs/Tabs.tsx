import { useState } from "react";
import { Container, Content, TabButton, ContainerTabs } from "./styled";
import { ConversionForm } from "../../ConversionForm/ConversionForm";

export interface ITabButtonProps {
    active: boolean;
};

export const Tabs = () => {
    const [activeTab, setActiveTab] = useState<'Tab1' | 'Tab2'>('Tab1');

    const handleTabClick = (tab: 'Tab1' | 'Tab2') => {
      setActiveTab(tab);
    };

   return (
       <Container>
         <ContainerTabs>
            <TabButton active={activeTab === 'Tab1'} onClick={() => handleTabClick('Tab1')}>
                Convertir 
           </TabButton>
           <TabButton active={activeTab === 'Tab2'} onClick={() => handleTabClick('Tab2')}>
             Graficos
           </TabButton>
         </ContainerTabs>
         <Content>
           {activeTab === 'Tab1' && <div>
            <ConversionForm />
            </div>}
           {activeTab === 'Tab2' && <div>Contenido de la Pestaña 2</div>}
         </Content>
       </Container>
  )
}
