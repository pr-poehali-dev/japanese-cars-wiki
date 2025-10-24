import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
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

interface ModelDialogProps {
  model: Model | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ModelDialog({ model, open, onOpenChange }: ModelDialogProps) {
  if (!model) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-heading text-3xl">{model.name}</DialogTitle>
          <DialogDescription>{model.year}</DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="aspect-video overflow-hidden rounded-lg bg-muted">
            <img 
              src={model.image} 
              alt={model.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid gap-4">
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Icon name="Info" size={20} className="text-primary" />
                Описание
              </h4>
              <p className="text-muted-foreground">{model.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-muted/50">
                <div className="flex items-center gap-2 mb-1">
                  <Icon name="Cog" size={18} className="text-primary" />
                  <span className="font-semibold">Двигатель</span>
                </div>
                <p className="text-sm text-muted-foreground">{model.engine}</p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50">
                <div className="flex items-center gap-2 mb-1">
                  <Icon name="Gauge" size={18} className="text-primary" />
                  <span className="font-semibold">Мощность</span>
                </div>
                <p className="text-sm text-muted-foreground">{model.power}</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Icon name="Images" size={20} className="text-primary" />
                Фотогалерея
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {model.gallery.map((img, idx) => (
                  <div key={idx} className="aspect-video overflow-hidden rounded-lg bg-muted">
                    <img 
                      src={img} 
                      alt={`${model.name} ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
