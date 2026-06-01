import { FileText, MoreVertical } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type Ticket = {
  id: string;
  title: string;
  category: string;
  status: string;
  sender: string;
  assignedTo: string;
  deadline: string;
};

type TicketTableProps = {
  tickets: Ticket[];
  onOpenTicket: (id: string, title: string) => void;
};

export function TicketTable({ tickets, onOpenTicket }: TicketTableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl border bg-card shadow-sm">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[120px] text-xs font-semibold tracking-wider text-muted-foreground uppercase">
              ID
            </TableHead>
            <TableHead className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
              TITLE
            </TableHead>
            <TableHead className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
              STATUS
            </TableHead>
            <TableHead className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
              SENDER
            </TableHead>
            <TableHead className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
              ASSIGNED TO
            </TableHead>
            <TableHead className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
              SUPPORT TEAM
            </TableHead>
            <TableHead className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
              DEADLINE
            </TableHead>
            <TableHead className="text-right text-xs font-semibold tracking-wider text-muted-foreground uppercase">
              ACTIONS
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tickets.map((ticket, idx) => (
            <TableRow
              key={ticket.id}
              className="cursor-pointer transition-colors hover:bg-slate-50"
              onClick={() => {
                onOpenTicket(ticket.id, ticket.title);
              }}
            >
              <TableCell className="font-semibold text-slate-500">{ticket.id}</TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="shrink-0 rounded-md bg-blue-50 p-1.5 text-blue-600">
                    <FileText className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{ticket.title}</p>
                    <p className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
                      {ticket.category}
                    </p>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                {ticket.status === 'PENDING' && (
                  <Badge
                    variant="outline"
                    className="border-amber-200 bg-amber-50 text-[10px] font-bold text-amber-600 uppercase"
                  >
                    <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-amber-500"></span> PENDING
                  </Badge>
                )}
                {ticket.status === 'IN PROGRESS' && (
                  <Badge
                    variant="outline"
                    className="border-blue-200 bg-blue-50 text-[10px] font-bold text-blue-600 uppercase"
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
                    <span className="text-sm leading-none font-semibold">{ticket.assignedTo}</span>
                    <span className="mt-1 text-[10px] text-slate-400">
                      {idx === 0 ? 'Lead Officer' : 'Coordinator'}
                    </span>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex -space-x-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-blue-100 text-[8px] font-bold text-blue-600 shadow-sm">
                    JC
                  </div>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green-100 text-[8px] font-bold text-green-600 shadow-sm">
                    MI
                  </div>
                  {idx === 0 && (
                    <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-slate-100 text-[8px] font-bold text-slate-600 shadow-sm">
                      +1
                    </div>
                  )}
                </div>
              </TableCell>
              <TableCell>
                <div className="text-sm font-medium text-slate-700">
                  <p>{ticket.deadline.split(' ')[0]}</p>
                  <p className="text-xs text-slate-400">
                    {ticket.deadline.split(' ')[1]} {ticket.deadline.split(' ')[2]}
                  </p>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      className="rounded-md p-2 text-muted-foreground hover:bg-muted focus:outline-none"
                    >
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-40 rounded-xl p-1 shadow-xl">
                    <DropdownMenuItem className="cursor-pointer px-3 py-2 text-sm font-medium">
                      View Details
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer px-3 py-2 text-sm font-medium">
                      Assign
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer px-3 py-2 text-sm font-medium text-red-600 focus:bg-red-50 focus:text-red-700">
                      Close Ticket
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex flex-col items-center gap-3 border-t p-4 text-sm font-medium text-slate-500 sm:flex-row sm:justify-between">
        <div>
          <p>Display 1-7 (7 entries)</p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <button className="flex h-8 w-8 items-center justify-center rounded-md border text-slate-400 hover:bg-slate-50">
            &lt;
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-600 text-white shadow-sm">
            1
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-md border text-slate-400 hover:bg-slate-50">
            &gt;
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="mr-2">Results per page</span>
          <select className="rounded-md border border-slate-200 bg-white p-1 px-2 font-medium focus:outline-none">
            <option>10</option>
          </select>
        </div>
      </div>
    </div>
  );
}
