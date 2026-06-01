import { FileText, FileSpreadsheet, MoreHorizontal, Eye } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

type DocumentCardProps = {
  doc: any;
  isSelected: boolean;
  onSelect: (id: string) => void;
};

export function DocumentCard({ doc, isSelected, onSelect }: DocumentCardProps) {
  const isApproved = doc.status === 'APPROVED';

  return (
    <Card
      className={`cursor-pointer overflow-hidden rounded-2xl transition-all hover:shadow-md ${
        isSelected ? 'border-blue-500 shadow-sm ring-1 ring-blue-500' : 'border-slate-200'
      }`}
      onClick={() => {
        onSelect(doc.id);
      }}
    >
      <CardContent className="p-5">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 shadow-sm">
            {doc.type === 'PDF' && <FileText className="h-7 w-7 text-red-500" />}
            {doc.type === 'EXCEL' && <FileSpreadsheet className="h-7 w-7 text-green-500" />}
            {doc.type === 'WORD' && <FileText className="h-7 w-7 text-blue-500" />}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between">
              <h4 className="mr-2 truncate text-sm font-bold text-slate-900">{doc.name}</h4>
              <button className="text-slate-400 hover:text-slate-600">
                <MoreHorizontal className="h-5 w-5" />
              </button>
            </div>

            <Badge
              variant="outline"
              className={`mt-1.5 border-transparent px-2 py-0.5 text-[10px] font-bold ${
                isApproved ? 'bg-green-50 text-green-600' : 'bg-yellow-50 text-yellow-600'
              }`}
            >
              {isApproved ? '✓ APPROVED' : 'PENDING'}
            </Badge>

            <div className="mt-4 flex items-end justify-between">
              <div className="text-[10px] font-medium text-slate-500">
                <p className="mb-0.5">
                  Created by: <span className="font-bold text-blue-600">{doc.creator}</span>
                </p>
                <p>Created on: {doc.date}</p>
              </div>
              <div className="text-right">
                <p className="mb-1 text-[9px] font-bold tracking-wider text-slate-400 uppercase">
                  RECIPIENTS:
                </p>
                <div className="flex justify-end -space-x-2">
                  <Image
                    src="https://i.pravatar.cc/150?u=1"
                    alt="Avatar"
                    width={24}
                    height={24}
                    className="h-6 w-6 rounded-full border-2 border-white object-cover"
                    unoptimized
                  />
                  <Image
                    src="https://i.pravatar.cc/150?u=2"
                    alt="Avatar"
                    width={24}
                    height={24}
                    className="h-6 w-6 rounded-full border-2 border-white object-cover"
                    unoptimized
                  />
                  <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-slate-100 text-[9px] font-bold text-slate-600">
                    +2
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between pt-1">
              <div className="flex flex-wrap gap-1">
                {doc.tags.map((tag: string, i: number) => (
                  <span key={i} className="text-[10px] font-bold text-blue-600 uppercase">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400">
                <Eye className="h-3.5 w-3.5" /> {doc.views} views
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
