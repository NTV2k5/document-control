import { FileText, FileSpreadsheet, MoreHorizontal } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type DocumentTableProps = {
  docs: any[];
  selectedDocId: string | null;
  onSelect: (id: string) => void;
};

export function DocumentTable({ docs, selectedDocId, onSelect }: DocumentTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <Table>
        <TableHeader className="bg-slate-50/50">
          <TableRow>
            <TableHead className="text-xs font-bold tracking-wider text-slate-500 uppercase">
              TYPE
            </TableHead>
            <TableHead className="text-xs font-bold tracking-wider text-slate-500 uppercase">
              DOCUMENT NAME
            </TableHead>
            <TableHead className="text-xs font-bold tracking-wider text-slate-500 uppercase">
              CREATOR
            </TableHead>
            <TableHead className="text-xs font-bold tracking-wider text-slate-500 uppercase">
              DATE
            </TableHead>
            <TableHead className="text-xs font-bold tracking-wider text-slate-500 uppercase">
              VIEWS
            </TableHead>
            <TableHead className="text-xs font-bold tracking-wider text-slate-500 uppercase">
              STATUS
            </TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {docs.map((doc) => (
            <TableRow
              key={doc.id}
              className={`cursor-pointer transition-colors hover:bg-slate-50 ${
                selectedDocId === doc.id ? 'bg-blue-50/50' : ''
              }`}
              onClick={() => {
                onSelect(doc.id);
              }}
            >
              <TableCell>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-100 bg-slate-50">
                  {doc.type === 'PDF' && <FileText className="h-5 w-5 text-red-500" />}
                  {doc.type === 'EXCEL' && <FileSpreadsheet className="h-5 w-5 text-green-500" />}
                  {doc.type === 'WORD' && <FileText className="h-5 w-5 text-blue-500" />}
                </div>
              </TableCell>
              <TableCell className="max-w-[200px] truncate font-bold text-slate-900">
                {doc.name}
              </TableCell>
              <TableCell className="font-medium text-slate-500">
                <div className="flex items-center gap-2">
                  <Image
                    src={`https://i.pravatar.cc/150?u=${doc.creator}`}
                    alt={doc.creator}
                    width={24}
                    height={24}
                    className="h-6 w-6 rounded-full object-cover"
                    unoptimized
                  />
                  {doc.creator}
                </div>
              </TableCell>
              <TableCell className="font-medium text-slate-500">{doc.date}</TableCell>
              <TableCell className="font-medium text-slate-500">{doc.views}</TableCell>
              <TableCell>
                {doc.status === 'APPROVED' ? (
                  <Badge
                    variant="outline"
                    className="border-transparent bg-green-50 text-[10px] font-bold text-green-600 uppercase"
                  >
                    ✓ APPROVED
                  </Badge>
                ) : (
                  <Badge
                    variant="outline"
                    className="border-transparent bg-yellow-50 text-[10px] font-bold text-yellow-600 uppercase"
                  >
                    PENDING
                  </Badge>
                )}
              </TableCell>
              <TableCell>
                <button className="text-slate-400 hover:text-slate-600">
                  <MoreHorizontal className="h-5 w-5" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
