import { Image as ImageIcon, Video, FileText, Archive } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { hubSummaryCards } from '@/utils/mockData';

export function MyHubSummary() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'Images': {
        return <ImageIcon className="h-6 w-6" />;
      }
      case 'Videos': {
        return <Video className="h-6 w-6" />;
      }
      case 'Documents': {
        return <FileText className="h-6 w-6" />;
      }
      case 'Other': {
        return <Archive className="h-6 w-6" />;
      }
      default: {
        return <FileText className="h-6 w-6" />;
      }
    }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'red': {
        return {
          bg: 'bg-red-50',
          text: 'text-red-500',
          bar: 'bg-red-500',
        };
      }
      case 'blue': {
        return {
          bg: 'bg-blue-50',
          text: 'text-blue-500',
          bar: 'bg-blue-500',
        };
      }
      case 'green': {
        return {
          bg: 'bg-green-50',
          text: 'text-green-500',
          bar: 'bg-green-500',
        };
      }
      case 'amber': {
        return {
          bg: 'bg-amber-50',
          text: 'text-amber-500',
          bar: 'bg-amber-500',
        };
      }
      default: {
        return {
          bg: 'bg-slate-50',
          text: 'text-slate-500',
          bar: 'bg-slate-500',
        };
      }
    }
  };

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
      {hubSummaryCards.map((card) => {
        const colors = getColorClasses(card.color);
        return (
          <Card key={card.id}>
            <CardContent className="flex h-full flex-col p-6">
              <div className="mb-4 flex items-start justify-between">
                <div className={`rounded-xl ${colors.bg} p-3 ${colors.text}`}>
                  {getIcon(card.type)}
                </div>
                <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  {card.type}
                </span>
              </div>
              <div className="mt-auto">
                <h3 className="mb-1 text-2xl font-bold">{card.count} Items</h3>
                <p className="text-xs text-muted-foreground">{card.size} used</p>
                <div
                  className={`mt-4 h-1 rounded-full ${colors.bar}`}
                  style={{ width: `${card.percentage}%` }}
                ></div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
