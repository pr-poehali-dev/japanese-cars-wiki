import { useState } from 'react';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import Header from '@/components/Header';
import HomeTab from '@/components/HomeTab';
import ManufacturersTab from '@/components/ManufacturersTab';
import ModelsTab from '@/components/ModelsTab';
import HistoryTab from '@/components/HistoryTab';
import ModelDialog from '@/components/ModelDialog';
import { manufacturers, models, historyTimeline } from '@/data/carsData';

export default function Index() {
  const [selectedModel, setSelectedModel] = useState<typeof models[0] | null>(null);
  const [selectedManufacturer, setSelectedManufacturer] = useState<string>('all');
  const [activeTab, setActiveTab] = useState('home');

  const handleManufacturerSelect = (id: string) => {
    setSelectedManufacturer(id);
    setActiveTab('models');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="container px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsContent value="home">
            <HomeTab 
              models={models} 
              onModelClick={setSelectedModel} 
              onTabChange={setActiveTab}
            />
          </TabsContent>

          <TabsContent value="manufacturers">
            <ManufacturersTab 
              manufacturers={manufacturers}
              onManufacturerSelect={handleManufacturerSelect}
            />
          </TabsContent>

          <TabsContent value="models">
            <ModelsTab 
              models={models}
              manufacturers={manufacturers}
              selectedManufacturer={selectedManufacturer}
              onManufacturerChange={setSelectedManufacturer}
              onModelClick={setSelectedModel}
            />
          </TabsContent>

          <TabsContent value="history">
            <HistoryTab timeline={historyTimeline} />
          </TabsContent>
        </Tabs>
      </main>

      <ModelDialog 
        model={selectedModel}
        open={!!selectedModel}
        onOpenChange={() => setSelectedModel(null)}
      />

      <footer className="border-t mt-16">
        <div className="container px-4 py-8 text-center text-sm text-muted-foreground">
          <p>© 2024 JDM Encyclopedia. Энциклопедия японских автомобилей</p>
        </div>
      </footer>
    </div>
  );
}
