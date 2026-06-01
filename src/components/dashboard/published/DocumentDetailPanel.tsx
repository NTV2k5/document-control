import { Download, FileCode2, FileText, Maximize2, X } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

type DocumentDetailPanelProps = {
  selectedDoc: any;
  onClose: () => void;
};

export function DocumentDetailPanel({ selectedDoc, onClose }: DocumentDetailPanelProps) {
  if (!selectedDoc) {
    return null;
  }

  return (
    <div className="flex h-full w-80 shrink-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
      <div className="border-b border-slate-100 p-5 pb-0">
        <div className="mb-6 flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <FileCode2 className="h-6 w-6" strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">{selectedDoc.id}</h3>
              <p className="mt-0.5 text-xs font-medium text-slate-500">
                Document ID: #{selectedDoc.documentId}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <Tabs defaultValue="detail" className="w-full">
          <TabsList className="flex h-11 w-full gap-2 rounded-none border-b-0 bg-transparent p-0">
            <TabsTrigger
              value="detail"
              className="relative flex-1 rounded-none border-b-2 border-transparent pt-2 pb-3 text-xs font-bold text-slate-500 shadow-none data-[state=active]:border-blue-600 data-[state=active]:bg-transparent data-[state=active]:text-blue-600"
            >
              Detail
            </TabsTrigger>
            <TabsTrigger
              value="activity"
              className="relative flex-1 rounded-none border-b-2 border-transparent pt-2 pb-3 text-xs font-bold text-slate-500 shadow-none data-[state=active]:border-blue-600 data-[state=active]:bg-transparent data-[state=active]:text-blue-600"
            >
              Activity
            </TabsTrigger>
            <TabsTrigger
              value="version"
              className="relative flex-1 rounded-none border-b-2 border-transparent pt-2 pb-3 text-xs font-bold text-slate-500 shadow-none data-[state=active]:border-blue-600 data-[state=active]:bg-transparent data-[state=active]:text-blue-600"
            >
              Version
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="flex-1 space-y-6 overflow-y-auto p-5">
        <div className="flex min-h-[180px] flex-col items-center justify-center rounded-2xl border border-dashed border-red-200 bg-red-50/30 p-5 text-center transition-colors hover:bg-red-50/50">
          <Badge
            variant="outline"
            className="mb-4 border-transparent bg-red-50 text-[10px] font-bold tracking-wider text-red-500 uppercase"
          >
            DEMO DOCUMENT ONLY
          </Badge>
          <div className="mb-3 text-slate-300">
            <FileText className="h-10 w-10" strokeWidth={1.5} />
          </div>
          <p className="max-w-[200px] text-[11px] leading-relaxed font-medium text-slate-500">
            Preview is currently restricted. Please download to view full content.
          </p>
          <Button
            variant="outline"
            size="sm"
            className="mt-5 h-9 rounded-full px-5 text-xs font-bold text-slate-700 shadow-sm"
          >
            <Maximize2 className="mr-2 h-3.5 w-3.5" /> View Fullscreen
          </Button>
        </div>

        <div>
          <h4 className="mb-3 text-[10px] font-bold tracking-wider text-slate-400 uppercase">
            RECIPIENTS
          </h4>
          <div className="flex items-center gap-2">
            <Image
              src="https://i.pravatar.cc/150?u=3"
              alt="Avatar"
              width={32}
              height={32}
              className="h-8 w-8 rounded-full border border-slate-200 object-cover"
              unoptimized
            />
            <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-dashed border-slate-300 bg-slate-50 text-slate-400 transition-colors hover:bg-slate-100">
              +
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="mb-1 text-[10px] font-bold tracking-wider text-slate-400 uppercase">
              CREATED ON
            </h4>
            <p className="text-xs font-bold text-slate-900">{selectedDoc.createdOn}</p>
          </div>
          <div>
            <h4 className="mb-1 text-[10px] font-bold tracking-wider text-slate-400 uppercase">
              STATUS
            </h4>
            <p className="flex items-center gap-1.5 text-xs font-bold text-green-600">
              <span className="h-2 w-2 rounded-full bg-green-500 shadow-sm"></span>{' '}
              {selectedDoc.status}
            </p>
          </div>
        </div>

        <div>
          <h4 className="mb-2 text-[10px] font-bold tracking-wider text-slate-400 uppercase">
            FOLDER
          </h4>
          <div className="flex w-max items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2">
            <span className="text-sm">📁</span>
            <span className="text-xs font-bold text-slate-700">{selectedDoc.folder}</span>
          </div>
        </div>

        <div>
          <h4 className="mb-2 text-[10px] font-bold tracking-wider text-slate-400 uppercase">
            TAGS
          </h4>
          <div className="flex flex-wrap gap-2">
            {selectedDoc.tags.map((tag: string, i: number) => (
              <span
                key={i}
                className="cursor-pointer text-[11px] font-bold text-blue-600 hover:underline"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-3 border-t border-slate-100 bg-slate-50/50 p-5">
        <Button
          variant="outline"
          className="h-10 flex-1 rounded-full bg-white text-xs font-bold text-slate-700 shadow-sm"
        >
          <Download className="mr-2 h-4 w-4" /> Download
        </Button>
        <Button className="h-10 flex-1 rounded-full bg-blue-600 text-xs font-bold text-white shadow-sm hover:bg-blue-700">
          Edit Details
        </Button>
      </div>
    </div>
  );
}
