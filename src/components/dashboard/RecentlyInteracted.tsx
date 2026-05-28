import {
  History,
  MoreHorizontal,
  FileText,
  Database,
  File,
  Image as ImageIcon,
  Video,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { recentlyInteracted } from '@/utils/mockData';

export function RecentlyInteracted() {
  const getDocTypeClass = (type: string): { bg: string; text: string; iconBg: string } => {
    if (type === 'WORD') {return { bg: 'bg-blue-50', text: 'text-blue-500', iconBg: 'bg-white' };}
    if (type === 'EXCEL')
      {return { bg: 'bg-emerald-50', text: 'text-emerald-500', iconBg: 'bg-white' };}
    if (type === 'PDF') {return { bg: 'bg-red-50', text: 'text-red-500', iconBg: 'bg-white' };}
    if (type === 'IMAGE') {return { bg: 'bg-green-50', text: 'text-green-500', iconBg: 'bg-white' };}
    return { bg: 'bg-purple-50', text: 'text-purple-500', iconBg: 'bg-white' };
  };

  const getDocIcon = (type: string, className: string) => {
    if (type === 'WORD') {return <FileText className={className} />;}
    if (type === 'EXCEL') {return <Database className={className} />;}
    if (type === 'PDF') {return <File className={className} />;}
    if (type === 'IMAGE') {return <ImageIcon className={className} />;}
    return <Video className={className} />;
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between px-1">
        <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900">
          <History className="h-5 w-5 text-blue-600" strokeWidth={3} /> Recently Interacted
        </h3>
        <button className="text-sm font-bold text-blue-600 hover:underline">View History</button>
      </div>
      <div className="hide-scrollbar flex gap-5 overflow-x-auto px-1 pt-2 pb-6">
        {recentlyInteracted.map((doc) => {
          const styles = getDocTypeClass(doc.type);
          return (
            <Card
              key={doc.id}
              className="min-w-[280px] shrink-0 cursor-pointer overflow-hidden rounded-2xl border-none shadow-sm ring-1 ring-slate-100 transition-all hover:-translate-y-1 hover:shadow-md hover:ring-slate-200"
            >
              <div className={`relative h-28 p-5 ${styles.bg}`}>
                <div className="flex items-start justify-between">
                  <div
                    className={`rounded-xl bg-white px-3 py-1 text-[10px] font-black tracking-wider shadow-sm ${styles.text}`}
                  >
                    {doc.type}
                  </div>
                  <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/50 text-slate-600 transition-colors hover:bg-white/80">
                    <MoreHorizontal className="h-5 w-5" />
                  </button>
                </div>
                <div className="absolute -bottom-6 left-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-lg shadow-slate-200/50">
                  {getDocIcon(doc.type, `h-7 w-7 ${styles.text}`)}
                </div>
              </div>
              <CardContent className="px-6 pt-10 pb-6">
                <h4 className="mb-2 text-base leading-tight font-bold text-slate-900">
                  {doc.title}
                </h4>
                <p className="mb-6 line-clamp-2 text-sm leading-relaxed font-medium text-muted-foreground/80">
                  {doc.description}
                </p>
                <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                  <p className="text-xs font-bold text-slate-400">Edited {doc.edited}</p>
                  <div className="flex h-6 w-10 cursor-pointer items-center rounded-full bg-slate-200 p-1 transition-colors hover:bg-slate-300">
                    <div className="h-4 w-4 rounded-full bg-white shadow-sm"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
