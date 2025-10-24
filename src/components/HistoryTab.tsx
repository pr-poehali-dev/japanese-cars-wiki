import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface HistoryPeriod {
  year: string;
  title: string;
  description: string;
}

interface HistoryTabProps {
  timeline: HistoryPeriod[];
}

export default function HistoryTab({ timeline }: HistoryTabProps) {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="space-y-4">
        <h2 className="font-heading text-4xl font-bold">История японского автопрома</h2>
        <p className="text-lg text-muted-foreground">От скромного начала до мирового лидерства</p>
      </div>

      <div className="relative space-y-8">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
        
        {timeline.map((period, index) => (
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
    </div>
  );
}
