import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Model {
  id: number;
  name: string;
  manufacturer: string;
  year: string;
  engine: string;
  power: string;
  description: string;
  image: string;
  gallery: string[];
}

interface Manufacturer {
  id: string;
  name: string;
  logo: string;
  founded: number;
  description: string;
}

interface ModelsTabProps {
  models: Model[];
  manufacturers: Manufacturer[];
  selectedManufacturer: string;
  onManufacturerChange: (id: string) => void;
  onModelClick: (model: Model) => void;
}

export default function ModelsTab({ 
  models, 
  manufacturers, 
  selectedManufacturer, 
  onManufacturerChange, 
  onModelClick 
}: ModelsTabProps) {
  const filteredModels = selectedManufacturer === 'all' 
    ? models 
    : models.filter(m => m.manufacturer === selectedManufacturer);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-4">
        <h2 className="font-heading text-4xl font-bold">Каталог моделей</h2>
        <div className="flex flex-wrap gap-2">
          <Button 
            variant={selectedManufacturer === 'all' ? 'default' : 'outline'}
            onClick={() => onManufacturerChange('all')}
          >
            Все
          </Button>
          {manufacturers.map((m) => (
            <Button
              key={m.id}
              variant={selectedManufacturer === m.id ? 'default' : 'outline'}
              onClick={() => onManufacturerChange(m.id)}
            >
              {m.logo} {m.name}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredModels.map((model) => (
          <Card 
            key={model.id}
            className="group cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1"
            onClick={() => onModelClick(model)}
          >
            <CardHeader className="p-0">
              <div className="aspect-video overflow-hidden rounded-t-lg bg-muted">
                <img 
                  src={model.image} 
                  alt={model.name}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-3">
              <div>
                <CardTitle className="font-heading text-xl">{model.name}</CardTitle>
                <CardDescription className="mt-1">{model.year}</CardDescription>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="Gauge" size={16} className="text-primary" />
                  <span>{model.power}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Cog" size={16} className="text-primary" />
                  <span>{model.engine}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2">{model.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
