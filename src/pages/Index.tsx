import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const manufacturers = [
  { id: 'toyota', name: 'Toyota', logo: '🚗', founded: 1937, description: 'Крупнейший автопроизводитель Японии' },
  { id: 'nissan', name: 'Nissan', logo: '🏁', founded: 1933, description: 'Пионер в области спортивных автомобилей' },
  { id: 'honda', name: 'Honda', logo: '⚡', founded: 1948, description: 'Инновации в области двигателей' },
  { id: 'mazda', name: 'Mazda', logo: '🎯', founded: 1920, description: 'Создатель роторного двигателя' },
  { id: 'subaru', name: 'Subaru', logo: '⭐', founded: 1953, description: 'Легендарный полный привод' },
  { id: 'mitsubishi', name: 'Mitsubishi', logo: '💎', founded: 1970, description: 'Эволюция в автоспорте' }
];

const models = [
  {
    id: 1,
    name: 'Toyota Supra MK4',
    manufacturer: 'toyota',
    year: '1993-2002',
    engine: '2JZ-GTE 3.0L Twin-Turbo',
    power: '280 л.с.',
    description: 'Легендарный японский спорткар с культовым двигателем 2JZ',
    image: 'https://cdn.poehali.dev/projects/62297ba0-9243-4119-b295-186f4229121f/files/0f6dfb4f-3818-4646-9894-dc12a546193d.jpg',
    gallery: [
      'https://cdn.poehali.dev/projects/62297ba0-9243-4119-b295-186f4229121f/files/0f6dfb4f-3818-4646-9894-dc12a546193d.jpg'
    ]
  },
  {
    id: 2,
    name: 'Nissan GT-R R35',
    manufacturer: 'nissan',
    year: '2007-настоящее время',
    engine: 'VR38DETT 3.8L Twin-Turbo V6',
    power: '570 л.с.',
    description: 'Суперкар с передовыми технологиями и легендарной историей',
    image: 'https://cdn.poehali.dev/projects/62297ba0-9243-4119-b295-186f4229121f/files/efa465ad-1dc8-4282-8bf7-d4216cff270b.jpg',
    gallery: [
      'https://cdn.poehali.dev/projects/62297ba0-9243-4119-b295-186f4229121f/files/efa465ad-1dc8-4282-8bf7-d4216cff270b.jpg'
    ]
  },
  {
    id: 3,
    name: 'Honda NSX Type R',
    manufacturer: 'honda',
    year: '1992-2005',
    engine: 'C32B 3.2L V6',
    power: '290 л.с.',
    description: 'Первый японский суперкар с алюминиевым кузовом',
    image: 'https://cdn.poehali.dev/projects/62297ba0-9243-4119-b295-186f4229121f/files/360d5574-f938-4ef9-b6fb-65d1e7925680.jpg',
    gallery: [
      'https://cdn.poehali.dev/projects/62297ba0-9243-4119-b295-186f4229121f/files/360d5574-f938-4ef9-b6fb-65d1e7925680.jpg'
    ]
  },
  {
    id: 4,
    name: 'Mazda RX-7 FD',
    manufacturer: 'mazda',
    year: '1992-2002',
    engine: '13B-REW Twin-Turbo Rotary',
    power: '280 л.с.',
    description: 'Последняя и самая совершенная модель с роторным двигателем',
    image: 'https://cdn.poehali.dev/projects/62297ba0-9243-4119-b295-186f4229121f/files/07bad7c4-4be5-4432-83fe-b44176b22a38.jpg',
    gallery: [
      'https://cdn.poehali.dev/projects/62297ba0-9243-4119-b295-186f4229121f/files/07bad7c4-4be5-4432-83fe-b44176b22a38.jpg'
    ]
  },
  {
    id: 5,
    name: 'Subaru Impreza WRX STI',
    manufacturer: 'subaru',
    year: '1994-настоящее время',
    engine: 'EJ257 2.5L Turbo',
    power: '310 л.с.',
    description: 'Легенда раллийного спорта с симметричным полным приводом',
    image: 'https://cdn.poehali.dev/projects/62297ba0-9243-4119-b295-186f4229121f/files/638471c7-4d2f-4b3e-896e-ad2137c0de09.jpg',
    gallery: [
      'https://cdn.poehali.dev/projects/62297ba0-9243-4119-b295-186f4229121f/files/638471c7-4d2f-4b3e-896e-ad2137c0de09.jpg'
    ]
  },
  {
    id: 6,
    name: 'Mitsubishi Lancer Evolution X',
    manufacturer: 'mitsubishi',
    year: '2007-2016',
    engine: '4B11T 2.0L Turbo',
    power: '295 л.с.',
    description: 'Финальное поколение легендарной Эво с двухклатчевой КПП',
    image: 'https://cdn.poehali.dev/projects/62297ba0-9243-4119-b295-186f4229121f/files/dc30a7ff-855b-4d92-af75-7da26a02d147.jpg',
    gallery: [
      'https://cdn.poehali.dev/projects/62297ba0-9243-4119-b295-186f4229121f/files/dc30a7ff-855b-4d92-af75-7da26a02d147.jpg'
    ]
  },
  {
    id: 7,
    name: 'Nissan Skyline GT-R R34',
    manufacturer: 'nissan',
    year: '1999-2002',
    engine: 'RB26DETT 2.6L Twin-Turbo',
    power: '280 л.с.',
    description: 'Последний Skyline GT-R с легендарным RB26, икона JDM культуры',
    image: 'https://cdn.poehali.dev/projects/62297ba0-9243-4119-b295-186f4229121f/files/6ccb27e7-be55-4028-b560-d60a35d0caf1.jpg',
    gallery: [
      'https://cdn.poehali.dev/projects/62297ba0-9243-4119-b295-186f4229121f/files/6ccb27e7-be55-4028-b560-d60a35d0caf1.jpg'
    ]
  },
  {
    id: 8,
    name: 'Toyota AE86 Trueno',
    manufacturer: 'toyota',
    year: '1983-1987',
    engine: '4A-GE 1.6L',
    power: '130 л.с.',
    description: 'Культовый дрифт-кар, прославленный в Initial D',
    image: 'https://cdn.poehali.dev/projects/62297ba0-9243-4119-b295-186f4229121f/files/e9bd20d6-b53e-4dd7-96ad-2d33a1fe26e0.jpg',
    gallery: [
      'https://cdn.poehali.dev/projects/62297ba0-9243-4119-b295-186f4229121f/files/e9bd20d6-b53e-4dd7-96ad-2d33a1fe26e0.jpg'
    ]
  },
  {
    id: 9,
    name: 'Honda S2000',
    manufacturer: 'honda',
    year: '1999-2009',
    engine: 'F20C 2.0L',
    power: '250 л.с.',
    description: 'Атмосферный родстер с высочайшей литровой мощностью',
    image: 'https://cdn.poehali.dev/projects/62297ba0-9243-4119-b295-186f4229121f/files/b500378f-ae2b-46b1-adc7-a5e352a545cd.jpg',
    gallery: [
      'https://cdn.poehali.dev/projects/62297ba0-9243-4119-b295-186f4229121f/files/b500378f-ae2b-46b1-adc7-a5e352a545cd.jpg'
    ]
  },
  {
    id: 10,
    name: 'Mazda MX-5 Miata',
    manufacturer: 'mazda',
    year: '1989-настоящее время',
    engine: 'Различные 1.6-2.0L',
    power: '130-184 л.с.',
    description: 'Самый популярный родстер в истории, символ удовольствия от вождения',
    image: '/placeholder.svg',
    gallery: ['/placeholder.svg']
  },
  {
    id: 11,
    name: 'Nissan 370Z',
    manufacturer: 'nissan',
    year: '2009-2020',
    engine: 'VQ37VHR 3.7L V6',
    power: '332 л.с.',
    description: 'Атмосферный V6 спорткар в традициях Z-серии',
    image: '/placeholder.svg',
    gallery: ['/placeholder.svg']
  },
  {
    id: 12,
    name: 'Toyota MR2 SW20',
    manufacturer: 'toyota',
    year: '1989-1999',
    engine: '3S-GTE 2.0L Turbo',
    power: '245 л.с.',
    description: 'Среднемоторный спорткар с турбонаддувом',
    image: '/placeholder.svg',
    gallery: ['/placeholder.svg']
  }
];

const historyTimeline = [
  { year: '1920-1950', title: 'Зарождение', description: 'Основание первых японских автомобильных компаний' },
  { year: '1960-1970', title: 'Экспансия', description: 'Выход на мировой рынок и начало экспорта' },
  { year: '1980-1990', title: 'Золотая эра', description: 'Создание легендарных спортивных моделей' },
  { year: '2000-настоящее', title: 'Инновации', description: 'Гибриды, электромобили и автономное вождение' }
];

export default function Index() {
  const [selectedModel, setSelectedModel] = useState<typeof models[0] | null>(null);
  const [selectedManufacturer, setSelectedManufacturer] = useState<string>('all');
  const [activeTab, setActiveTab] = useState('home');

  const filteredModels = selectedManufacturer === 'all' 
    ? models 
    : models.filter(m => m.manufacturer === selectedManufacturer);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🇯🇵</span>
            <h1 className="font-heading text-xl font-bold">JDM Encyclopedia</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <Button variant="ghost" onClick={() => setActiveTab('home')} className={activeTab === 'home' ? 'text-primary' : ''}>
              Главная
            </Button>
            <Button variant="ghost" onClick={() => setActiveTab('manufacturers')} className={activeTab === 'manufacturers' ? 'text-primary' : ''}>
              Производители
            </Button>
            <Button variant="ghost" onClick={() => setActiveTab('models')} className={activeTab === 'models' ? 'text-primary' : ''}>
              Модели
            </Button>
            <Button variant="ghost" onClick={() => setActiveTab('history')} className={activeTab === 'history' ? 'text-primary' : ''}>
              История
            </Button>
          </nav>
        </div>
      </header>

      <main className="container px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsContent value="home" className="space-y-8 animate-fade-in">
            <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 p-12 text-center">
              <div className="relative z-10 space-y-4">
                <h2 className="font-heading text-5xl font-bold">Японские Автомобили</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Исследуйте легендарные модели, узнайте историю производителей и погрузитесь в мир японского автопрома
                </p>
                <div className="flex gap-4 justify-center pt-4">
                  <Button size="lg" onClick={() => setActiveTab('models')}>
                    <Icon name="Car" className="mr-2" size={20} />
                    Каталог моделей
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => setActiveTab('manufacturers')}>
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
                    onClick={() => setSelectedModel(model)}
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
          </TabsContent>

          <TabsContent value="manufacturers" className="space-y-6 animate-fade-in">
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
                      onClick={() => {
                        setSelectedManufacturer(manufacturer.id);
                        setActiveTab('models');
                      }}
                    >
                      Смотреть модели
                      <Icon name="ArrowRight" className="ml-2" size={16} />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="models" className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <h2 className="font-heading text-4xl font-bold">Каталог моделей</h2>
              <div className="flex flex-wrap gap-2">
                <Button 
                  variant={selectedManufacturer === 'all' ? 'default' : 'outline'}
                  onClick={() => setSelectedManufacturer('all')}
                >
                  Все
                </Button>
                {manufacturers.map((m) => (
                  <Button
                    key={m.id}
                    variant={selectedManufacturer === m.id ? 'default' : 'outline'}
                    onClick={() => setSelectedManufacturer(m.id)}
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
                  onClick={() => setSelectedModel(model)}
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
          </TabsContent>

          <TabsContent value="history" className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="font-heading text-4xl font-bold">История японского автопрома</h2>
              <p className="text-lg text-muted-foreground">От скромного начала до мирового лидерства</p>
            </div>

            <div className="relative space-y-8">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
              
              {historyTimeline.map((period, index) => (
                <div key={index} className="relative pl-0 md:pl-20 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="absolute left-5 top-0 w-6 h-6 rounded-full bg-primary border-4 border-background hidden md:block" />
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-bold">
                          {period.year}
                        </div>
                        <CardTitle className="font-heading">{period.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{period.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Интересные факты</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <div className="text-2xl">📊</div>
                  <div>
                    <h4 className="font-semibold">Мировое лидерство</h4>
                    <p className="text-sm text-muted-foreground">Япония занимает 3-е место в мире по производству автомобилей</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-2xl">⚡</div>
                  <div>
                    <h4 className="font-semibold">Гибридные технологии</h4>
                    <p className="text-sm text-muted-foreground">Toyota Prius стал первым массовым гибридным автомобилем в 1997 году</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-2xl">🏁</div>
                  <div>
                    <h4 className="font-semibold">Автоспорт</h4>
                    <p className="text-sm text-muted-foreground">Японские бренды доминируют в раллийных соревнованиях с 1990-х годов</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Dialog open={!!selectedModel} onOpenChange={() => setSelectedModel(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedModel && (
            <>
              <DialogHeader>
                <DialogTitle className="font-heading text-3xl">{selectedModel.name}</DialogTitle>
                <DialogDescription>{selectedModel.year}</DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6">
                <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                  <img 
                    src={selectedModel.image} 
                    alt={selectedModel.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="grid gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Info" size={20} className="text-primary" />
                      Описание
                    </h4>
                    <p className="text-muted-foreground">{selectedModel.description}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-muted/50">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon name="Cog" size={18} className="text-primary" />
                        <span className="font-semibold">Двигатель</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{selectedModel.engine}</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon name="Gauge" size={18} className="text-primary" />
                        <span className="font-semibold">Мощность</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{selectedModel.power}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Icon name="Images" size={20} className="text-primary" />
                      Фотогалерея
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {selectedModel.gallery.map((img, idx) => (
                        <div key={idx} className="aspect-video overflow-hidden rounded-lg bg-muted">
                          <img 
                            src={img} 
                            alt={`${selectedModel.name} ${idx + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <footer className="border-t mt-16">
        <div className="container px-4 py-8 text-center text-sm text-muted-foreground">
          <p>© 2024 JDM Encyclopedia. Энциклопедия японских автомобилей</p>
        </div>
      </footer>
    </div>
  );
}