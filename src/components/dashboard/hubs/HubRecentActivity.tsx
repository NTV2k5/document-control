import { FileText, MoreVertical } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type HubRecentActivityProps = {
  activityList: any[];
}

export function HubRecentActivity({ activityList }: HubRecentActivityProps) {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-bold text-slate-900">Recent Activity</h3>
        <button className="text-sm font-bold text-blue-600 hover:underline">
          View Full Audit Trail
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <Table>
          <TableHeader className="bg-slate-50/50">
            <TableRow>
              <TableHead className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                NAME
              </TableHead>
              <TableHead className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                LAST MODIFIED
              </TableHead>
              <TableHead className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                DIRECTORY
              </TableHead>
              <TableHead className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                OWNERS
              </TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {activityList.map((activity) => (
              <TableRow key={activity.id} className="transition-colors hover:bg-slate-50">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-lg bg-${activity.color}-50 text-${activity.color}-500`}
                    >
                      <FileText className="h-4 w-4" strokeWidth={2.5} />
                    </div>
                    <span className="text-sm font-bold text-slate-900">{activity.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-xs font-medium text-slate-500">
                  {activity.modified}
                </TableCell>
                <TableCell className="text-xs font-medium text-slate-500">
                  {activity.directory}
                </TableCell>
                <TableCell>
                  <div className="flex -space-x-2">
                    {activity.owners.map((owner: any) => (
                      <div
                        key={owner.id}
                        className={`flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-${owner.color}-100 text-[10px] shadow-sm ${
                          owner.text
                            ? `text-${owner.text}-600 font-bold`
                            : 'font-bold text-slate-600'
                        }`}
                      >
                        {owner.label}
                      </div>
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <button className="ml-auto flex cursor-pointer items-center justify-center rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
