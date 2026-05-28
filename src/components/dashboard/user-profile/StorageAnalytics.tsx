import { Info } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Card, CardContent } from '@/components/ui/card';
import { storageDataMock } from '@/utils/mockData';

export function StorageAnalytics() {
  return (
    <Card className="rounded-3xl border-none shadow-sm ring-1 ring-slate-100/50">
      <CardContent className="p-8">
        <div className="mb-6 flex items-center justify-between">
          <h4 className="font-bold text-slate-800">Storage Analytics</h4>
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-50">
            <Info className="h-3 w-3 text-slate-400" />
          </div>
        </div>

        <div className="relative mb-8 flex h-[200px] w-full items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={storageDataMock}
                innerRadius={70}
                outerRadius={90}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {storageDataMock.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pt-2">
            <span className="text-4xl font-bold text-slate-800">42%</span>
            <span className="mt-1 text-[10px] font-bold tracking-wider text-slate-400 uppercase">
              USED
            </span>
          </div>
        </div>

        <div className="space-y-4">
          {storageDataMock.map((item, i) => (
            <div key={i} className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-100/50">
                  <div className="h-3 w-3 rounded-sm" style={{ backgroundColor: item.color }}></div>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">{item.name}</p>
                  <p className="text-xs font-medium text-slate-400">{item.size}</p>
                </div>
              </div>
              <span className="text-sm font-bold text-slate-800">{item.value}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
