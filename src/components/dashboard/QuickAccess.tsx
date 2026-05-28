import { Globe, FileText, UploadCloud } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function QuickAccess() {
  return (
    <div>
      <h3 className="mb-6 px-1 text-lg font-bold text-slate-900">Quick Access</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="cursor-pointer rounded-2xl border-none shadow-sm ring-1 ring-slate-100 transition-all hover:-translate-y-1 hover:shadow-md hover:ring-slate-200">
          <CardContent className="flex flex-col items-start gap-6 p-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
              <Globe className="h-6 w-6" strokeWidth={2.5} />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">Published</h4>
              <p className="mt-1 text-xs font-medium text-muted-foreground/80">
                Public institutional records
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="cursor-pointer rounded-2xl border-none shadow-sm ring-1 ring-slate-100 transition-all hover:-translate-y-1 hover:shadow-md hover:ring-slate-200">
          <CardContent className="flex flex-col items-start gap-6 p-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-fuchsia-50 text-fuchsia-600">
              <FileText className="h-6 w-6" strokeWidth={2.5} />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">My Documents</h4>
              <p className="mt-1 text-xs font-medium text-muted-foreground/80">
                Personal draft documents
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="cursor-pointer rounded-2xl border-none shadow-sm ring-1 ring-slate-100 transition-all hover:-translate-y-1 hover:shadow-md hover:ring-slate-200">
          <CardContent className="flex flex-col items-start gap-6 p-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 text-purple-600">
              <UploadCloud className="h-6 w-6" strokeWidth={2.5} />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">Upload New</h4>
              <p className="mt-1 text-xs font-medium text-muted-foreground/80">
                Submit for control approval
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="cursor-pointer rounded-2xl border-none bg-violet-600 text-white shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
          <CardContent className="flex h-full flex-col p-8">
            <h4 className="mb-2 text-lg font-bold">Need Help?</h4>
            <p className="mb-6 text-xs leading-relaxed font-medium text-violet-200">
              Our support team is available 24/7 for technical assistance.
            </p>
            <Button className="mt-auto self-start rounded-full bg-white px-6 py-5 text-sm font-bold text-violet-700 shadow-sm hover:bg-slate-100">
              Open Ticket
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
