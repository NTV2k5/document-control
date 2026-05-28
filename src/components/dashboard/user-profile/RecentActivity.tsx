import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { recentActivityLogs } from '@/utils/mockData';

export function RecentActivity() {
  return (
    <Card className="rounded-3xl border-none shadow-sm ring-1 ring-slate-100/50">
      <CardContent className="p-8">
        <h4 className="mb-8 font-bold text-slate-800">Recent Activity</h4>

        <div className="space-y-8">
          {recentActivityLogs.map((log) => (
            <div key={log.id} className="relative flex gap-5">
              <div className="absolute top-6 left-[7px] h-full w-[2px] bg-slate-100"></div>
              <div
                className={`relative z-10 mt-1 h-4 w-4 shrink-0 rounded-full border-[3px] border-white ${log.color} shadow-sm ring-1 ring-slate-100`}
              ></div>
              <div>
                <p className="text-sm font-bold text-slate-800">{log.title}</p>
                <p className="mt-1 text-xs font-medium text-slate-400">
                  {log.time} • {log.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Button
          variant="link"
          className="mt-8 w-full rounded-xl py-6 font-bold text-blue-600 hover:bg-blue-50/50 hover:no-underline"
        >
          View All Logs
        </Button>
      </CardContent>
    </Card>
  );
}
