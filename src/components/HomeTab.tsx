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

interface HomeTabProps {
  models: Model[];
  onModelClick: (model: Model) => void;
  onTabChange: (tab: string) => void;
}

export default function HomeTab({ models, onModelClick, onTabChange }: HomeTabProps) {
  return (
    <div className="space-y-8 animate-fade-in">
      <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 p-12 text-center">
        <div className="relative z-10 space-y-4">
          <h2 className="font-heading text-5xl font-bold">Японские Автомобили</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Исследуйте легендарные модели, узнайте историю производителей и погрузитесь в мир японского автопрома
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button size="lg" onClick={() => onTabChange('models')}>
              <Icon name="Car" className="mr-2" size={20} />
              Каталог моделей
            </Button>
            <Button size="lg" variant="outline" onClick={() => onTabChange('manufacturers')}>
              <Icon name="Building2" className="mr-2" size={20} />
              Производители
            </Button>
          </div>
        </div>
      </section>

      <section>
        <h3 className="font-heading text-3xl font-bold mb-6">Популярные модели</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {models.slice(0, 3).map((model) => (
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
              <CardContent className="p-6 space-y-2">
                <CardTitle className="font-heading">{model.name}</CardTitle>
                <CardDescription className="space-y-1">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Calendar" size={16} />
                    {model.year}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Gauge" size={16} />
                    {model.power}
                  </div>
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
