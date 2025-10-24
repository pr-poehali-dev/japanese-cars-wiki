import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Manufacturer {
  id: string;
  name: string;
  logo: string;
  founded: number;
  description: string;
}

interface ManufacturersTabProps {
  manufacturers: Manufacturer[];
  onManufacturerSelect: (id: string) => void;
}

export default function ManufacturersTab({ manufacturers, onManufacturerSelect }: ManufacturersTabProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-4">
        <h2 className="font-heading text-4xl font-bold">Производители</h2>
        <p className="text-muted-foreground text-lg">Японские автомобильные бренды, изменившие мир</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {manufacturers.map((manufacturer) => (
          <Card key={manufacturer.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="text-4xl">{manufacturer.logo}</div>
                <div>
                  <CardTitle className="font-heading">{manufacturer.name}</CardTitle>
                  <CardDescription>Основан в {manufacturer.founded}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{manufacturer.description}</p>
              <Button 
                variant="outline" 
                className="w-full mt-4"
                onClick={() => onManufacturerSelect(manufacturer.id)}
              >
                Смотреть модели
                <Icon name="ArrowRight" className="ml-2" size={16} />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
