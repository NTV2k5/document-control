'use client';

import {
  Filter,
  MoreVertical,
  Plus,
  Ticket as TicketIcon,
  ClipboardList,
  CheckCircle2,
  Gauge,
  FileText,
} from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { TicketDetailModal } from '@/components/tickets/TicketDetailModal';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ticketMetrics, ticketList } from '@/utils/mockData';

export default function Tickets() {
  const [selectedTicketId, setSelectedTicketId] = useState<string | null>(null);
  const [selectedTicketTitle, setSelectedTicketTitle] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openTicketDetail = (id: string, title: string) => {
    setSelectedTicketId(id);
    setSelectedTicketTitle(title);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-8 pb-10">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold">Ticket</h2>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" /> Filter
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="mr-2 h-4 w-4" /> NEW TICKET
          </Button>
        </div>
      </div>

      {/* Metric Cards */}
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

      {/* Filters */}
      <div className="mb-4 flex flex-wrap gap-2">
        <Badge
          variant="default"
          className="rounded-full bg-blue-600 px-4 py-1.5 text-xs hover:bg-blue-700"
        >
          ALL
        </Badge>
        <Badge
          variant="outline"
          className="rounded-full border-border bg-background px-4 py-1.5 text-xs font-medium text-muted-foreground hover:bg-muted"
        >
          PENDING{' '}
          <span className="ml-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
            1
          </span>
        </Badge>
        <Badge
          variant="outline"
          className="rounded-full border-border bg-background px-4 py-1.5 text-xs font-medium text-muted-foreground hover:bg-muted"
        >
          IN PROGRESS
        </Badge>
        <Badge
          variant="outline"
          className="rounded-full border-border bg-background px-4 py-1.5 text-xs font-medium text-muted-foreground hover:bg-muted"
        >
          COMPLETED
        </Badge>
        <Badge
          variant="outline"
          className="rounded-full border-border bg-background px-4 py-1.5 text-xs font-medium text-muted-foreground hover:bg-muted"
        >
          OVERDUE
        </Badge>
        <Badge
          variant="outline"
          className="rounded-full border-border bg-background px-4 py-1.5 text-xs font-medium text-muted-foreground hover:bg-muted"
        >
          DECLINED
        </Badge>
        <Badge
          variant="outline"
          className="rounded-full border-border bg-background px-4 py-1.5 text-xs font-medium text-muted-foreground hover:bg-muted"
        >
          REQUIRED FILE SCANNED{' '}
          <span className="ml-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
            0
          </span>
        </Badge>
      </div>

      {/* Tickets Table */}
      <div className="rounded-2xl border bg-card shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[120px] text-xs font-semibold tracking-wider uppercase">
                ID
              </TableHead>
              <TableHead className="text-xs font-semibold tracking-wider uppercase">
                TITLE
              </TableHead>
              <TableHead className="text-xs font-semibold tracking-wider uppercase">
                STATUS
              </TableHead>
              <TableHead className="text-xs font-semibold tracking-wider uppercase">
                SENDER
              </TableHead>
              <TableHead className="text-xs font-semibold tracking-wider uppercase">
                ASSIGNED TO
              </TableHead>
              <TableHead className="text-xs font-semibold tracking-wider uppercase">
                SUPPORT TEAM
              </TableHead>
              <TableHead className="text-xs font-semibold tracking-wider uppercase">
                DEADLINE
              </TableHead>
              <TableHead className="text-right text-xs font-semibold tracking-wider uppercase">
                ACTIONS
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ticketList.map((ticket, idx) => (
              <TableRow
                key={ticket.id}
                className="cursor-pointer hover:bg-muted/50"
                onClick={() => {
                  openTicketDetail(ticket.id, ticket.title);
                }}
              >
                <TableCell className="font-medium text-slate-500">{ticket.id}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="shrink-0 rounded-md bg-blue-50 p-1.5 text-blue-600">
                      <FileText className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{ticket.title}</p>
                      <p className="text-[10px] font-semibold tracking-wider text-muted-foreground uppercase">
                        {ticket.category}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  {ticket.status === 'PENDING' && (
                    <Badge
                      variant="outline"
                      className="border-amber-200 bg-amber-50 text-[10px] text-amber-600 uppercase"
                    >
                      <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-amber-500"></span> PENDING
                    </Badge>
                  )}
                  {ticket.status === 'IN PROGRESS' && (
                    <Badge
                      variant="outline"
                      className="border-blue-200 bg-blue-50 text-[10px] text-blue-600 uppercase"
                    >
                      <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-blue-500"></span> IN
                      PROGRESS
                    </Badge>
                  )}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Image
                      src={`https://i.pravatar.cc/150?u=${ticket.sender}`}
                      width={24}
                      height={24}
                      className="h-6 w-6 rounded-full"
                      alt={ticket.sender}
                      unoptimized
                    />
                    <span className="text-sm font-medium">{ticket.sender}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Image
                      src={`https://i.pravatar.cc/150?u=${ticket.assignedTo}`}
                      width={24}
                      height={24}
                      className="h-6 w-6 rounded-full"
                      alt={ticket.assignedTo}
                      unoptimized
                    />
                    <div className="flex flex-col">
                      <span className="text-sm leading-none font-medium">{ticket.assignedTo}</span>
                      <span className="mt-1 text-[10px] text-muted-foreground">
                        {idx === 0 ? 'Lead Officer' : 'Coordinator'}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex -space-x-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-blue-100 text-[8px] font-bold text-blue-600">
                      JC
                    </div>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green-100 text-[8px] font-bold text-green-600">
                      MI
                    </div>
                    {idx === 0 && (
                      <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-slate-100 text-[8px] font-bold text-slate-600">
                        +1
                      </div>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-sm text-slate-700">
                    <p>{ticket.deadline.split(' ')[0]}</p>
                    <p className="text-xs text-muted-foreground">
                      {ticket.deadline.split(' ')[1]} {ticket.deadline.split(' ')[2]}
                    </p>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    className="rounded-md p-2 text-muted-foreground hover:bg-muted"
                  >
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="flex items-center justify-between border-t p-4 text-sm text-muted-foreground">
          <p>Display 1-7 (7 entries)</p>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="h-8 w-8">
              &lt;
            </Button>
            <Button variant="default" size="icon" className="h-8 w-8 bg-blue-600">
              1
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8">
              &gt;
            </Button>
            <span className="mr-2 ml-4">Results per page</span>
            <select className="rounded border p-1">
              <option>10</option>
            </select>
          </div>
        </div>
      </div>

      <TicketDetailModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
        ticketId={selectedTicketId ?? ''}
        ticketTitle={selectedTicketTitle}
      />
    </div>
  );
}
