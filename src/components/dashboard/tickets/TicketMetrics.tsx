import { Ticket as TicketIcon, ClipboardList, CheckCircle2, Gauge } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { ticketMetrics } from '@/utils/mockData';

export function TicketMetrics() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
      <Card className="border-blue-100 bg-blue-50/30">
        <CardContent className="flex items-center gap-4 p-6">
          <div className="rounded-2xl bg-blue-100 p-4 text-blue-600">
            <TicketIcon className="h-8 w-8" />
          </div>
          <div>
            <p className="mb-1 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
              TOTAL TICKETS
            </p>
            <h3 className="text-3xl font-bold">{ticketMetrics.total}</h3>
          </div>
        </CardContent>
      </Card>

      <Card className="border-amber-100 bg-amber-50/30">
        <CardContent className="flex items-center gap-4 p-6">
          <div className="rounded-2xl bg-amber-100 p-4 text-amber-600">
            <ClipboardList className="h-8 w-8" />
          </div>
          <div>
            <p className="mb-1 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
              PENDING TASKS
            </p>
            <h3 className="text-3xl font-bold">{ticketMetrics.pending}</h3>
          </div>
        </CardContent>
      </Card>

      <Card className="border-green-100 bg-green-50/30">
        <CardContent className="flex items-center gap-4 p-6">
          <div className="rounded-2xl bg-green-100 p-4 text-green-600">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <div>
            <p className="mb-1 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
              RESOLVED TODAY
            </p>
            <h3 className="text-3xl font-bold">{ticketMetrics.resolvedToday}</h3>
          </div>
        </CardContent>
      </Card>

      <Card className="border-purple-100 bg-purple-50/30">
        <CardContent className="flex items-center gap-4 p-6">
          <div className="rounded-2xl bg-purple-100 p-4 text-purple-600">
            <Gauge className="h-8 w-8" />
          </div>
          <div>
            <p className="mb-1 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
              AVG. RESPONSE (HOUR)
            </p>
            <h3 className="text-3xl font-bold">{ticketMetrics.avgResponse}</h3>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
