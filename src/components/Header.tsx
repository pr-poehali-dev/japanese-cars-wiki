import { Button } from '@/components/ui/button';

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Header({ activeTab, onTabChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🇯🇵</span>
          <h1 className="font-heading text-xl font-bold">JDM Encyclopedia</h1>
        </div>
        <nav className="hidden md:flex gap-6">
          <Button variant="ghost" onClick={() => onTabChange('home')} className={activeTab === 'home' ? 'text-primary' : ''}>
            Главная
          </Button>
          <Button variant="ghost" onClick={() => onTabChange('manufacturers')} className={activeTab === 'manufacturers' ? 'text-primary' : ''}>
            Производители
          </Button>
          <Button variant="ghost" onClick={() => onTabChange('models')} className={activeTab === 'models' ? 'text-primary' : ''}>
            Модели
          </Button>
          <Button variant="ghost" onClick={() => onTabChange('history')} className={activeTab === 'history' ? 'text-primary' : ''}>
            История
          </Button>
        </nav>
      </div>
    </header>
  );
}
