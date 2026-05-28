import { FileText, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { statsOverview } from '@/utils/mockData';

export function StatsOverview() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <Card className="rounded-2xl border-none shadow-sm ring-1 ring-slate-100">
        <CardContent className="flex items-center justify-between p-8">
          <div>
            <p className="mb-2 text-xs font-bold tracking-wider text-muted-foreground uppercase">
              {statsOverview.publishedFiles.label}
            </p>
            <h4 className="text-4xl font-extrabold text-slate-900">
              {statsOverview.publishedFiles.value}
            </h4>
            <p className={`mt-2 text-xs font-bold ${statsOverview.publishedFiles.trendColor}`}>
              {statsOverview.publishedFiles.trend}
            </p>
          </div>
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-[0_8px_16px_rgba(59,130,246,0.2)]">
            <FileText className="h-7 w-7" />
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-2xl border-none shadow-sm ring-1 ring-slate-100">
        <CardContent className="flex items-center justify-between p-8">
          <div>
            <p className="mb-2 text-xs font-bold tracking-wider text-muted-foreground uppercase">
              {statsOverview.myFiles.label}
            </p>
            <h4 className="text-4xl font-extrabold text-slate-900">
              {statsOverview.myFiles.value}
            </h4>
            <p className={`mt-2 text-xs font-bold ${statsOverview.myFiles.trendColor}`}>
              {statsOverview.myFiles.trend}
            </p>
          </div>
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-500 shadow-[0_8px_16px_rgba(6,182,212,0.2)]">
            <ShieldCheck className="h-8 w-8" strokeWidth={2.5} />
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-2xl border-none shadow-sm ring-1 ring-slate-100">
        <CardContent className="flex items-center justify-between p-8">
          <div>
            <p className="mb-2 text-xs font-bold tracking-wider text-muted-foreground uppercase">
              {statsOverview.sharingFiles.label}
            </p>
            <h4 className="text-4xl font-extrabold text-slate-900">
              {statsOverview.sharingFiles.value}
            </h4>
            <div className="mt-2 flex items-center gap-1 text-xs font-bold text-blue-600">
              <CheckCircle2 className="h-3.5 w-3.5" />
              <span>{statsOverview.sharingFiles.trend}</span>
            </div>
          </div>
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-green-500 shadow-[0_8px_16px_rgba(34,197,94,0.2)]">
            <CheckCircle2 className="h-8 w-8" strokeWidth={2.5} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
