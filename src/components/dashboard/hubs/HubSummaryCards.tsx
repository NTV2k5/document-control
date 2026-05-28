import { Image as ImageIcon, Video, FileText, Archive } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const renderIcon = (icon: string) => {
  switch (icon) {
    case 'image': {
      return <ImageIcon className="h-6 w-6" strokeWidth={2} />;
    }
    case 'video': {
      return <Video className="h-6 w-6" strokeWidth={2} />;
    }
    case 'document': {
      return <FileText className="h-6 w-6" strokeWidth={2} />;
    }
    case 'archive': {
      return <Archive className="h-6 w-6" strokeWidth={2} />;
    }
    default: {
      return <FileText className="h-6 w-6" strokeWidth={2} />;
    }
  }
};

type HubSummaryCardsProps = {
  cards: any[];
}

export function HubSummaryCards({ cards }: HubSummaryCardsProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
      {cards.map((card) => (
        <Card
          key={card.id}
          className="rounded-2xl border-none shadow-sm ring-1 ring-slate-100 transition-shadow hover:shadow-md"
        >
          <CardContent className="p-6">
            <div className="mb-4 flex items-start justify-between">
              <div
                className={`rounded-2xl bg-${card.color}-50 p-3 text-${card.color}-500 shadow-sm`}
              >
                {renderIcon(card.icon)}
              </div>
              <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                {card.type}
              </span>
            </div>
            <h3 className="mb-1 text-2xl font-extrabold text-slate-900">{card.count} Items</h3>
            <p className="text-xs font-medium text-slate-500">{card.size} used</p>
            <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
              <div
                className={`h-full bg-${card.color}-500`}
                style={{ width: `${card.percentage}%` }}
              ></div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
