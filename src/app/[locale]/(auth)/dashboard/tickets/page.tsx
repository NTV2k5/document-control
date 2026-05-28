'use client';

import { Plus } from 'lucide-react';
import { useState } from 'react';
import { TicketDetailModal } from '@/components/dashboard/tickets/TicketDetailModal';
import { TicketMetrics } from '@/components/dashboard/tickets/TicketMetrics';
import { TicketTable } from '@/components/dashboard/tickets/TicketTable';
import { TicketTabs } from '@/components/dashboard/tickets/TicketTabs';
import { TrendingHashtags } from '@/components/dashboard/TrendingHashtags';
import { Button } from '@/components/ui/button';
import { ticketList, trendingTags } from '@/utils/mockData';

export default function Tickets() {
  const [selectedTicketId, setSelectedTicketId] = useState<string | null>(null);
  const [selectedTicketTitle, setSelectedTicketTitle] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openTicketDetail = (id: string, title: string) => {
    setSelectedTicketId(id);
    setSelectedTicketTitle(title);
    setIsModalOpen(true);
  };

  const [activeTab, setActiveTab] = useState('ALL');

  const pendingCount = ticketList.filter((t) => t.status === 'PENDING').length;
  const inProgressCount = ticketList.filter((t) => t.status === 'IN PROGRESS').length;
  const completedCount = ticketList.filter((t) => t.status === 'COMPLETED').length;
  const overdueCount = ticketList.filter((t) => t.status === 'OVERDUE').length;
  const declinedCount = ticketList.filter((t) => t.status === 'DECLINED').length;

  const tabs = [
    { id: 'ALL', label: 'ALL', count: null },
    { id: 'PENDING', label: 'PENDING', count: pendingCount, highlight: true },
    { id: 'IN PROGRESS', label: 'IN PROGRESS', count: inProgressCount },
    { id: 'COMPLETED', label: 'COMPLETED', count: completedCount },
    { id: 'OVERDUE', label: 'OVERDUE', count: overdueCount },
    { id: 'DECLINED', label: 'DECLINED', count: declinedCount },
    { id: 'REQUIRED FILE SCANNED', label: 'REQUIRED FILE SCANNED', count: 0, highlight: true },
  ];

  const filteredTickets =
    activeTab === 'ALL'
      ? ticketList
      : ticketList.filter(
          (t) =>
            t.status === activeTab ||
            (activeTab === 'REQUIRED FILE SCANNED' && t.status === 'REQUIRED FILE SCANNED'),
        );

  return (
    <div className="space-y-8 pb-10">
      <TrendingHashtags tags={trendingTags} />

      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold">Ticket</h2>
        <div className="flex items-center gap-3">
          <Button className="bg-blue-600 font-bold hover:bg-blue-700">
            <Plus className="mr-2 h-4 w-4" /> NEW TICKET
          </Button>
        </div>
      </div>

      {/* Metric Cards */}
      <TicketMetrics />

      {/* Filters */}
      <TicketTabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Tickets Table */}
      <TicketTable tickets={filteredTickets} onOpenTicket={openTicketDetail} />

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
