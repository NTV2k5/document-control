import { X, FileText, Edit2, Check } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ticketHistory, ticketDetailMock } from '@/utils/mockData';

type TicketDetailModalProps = {
  isOpen: boolean;
  onClose: () => void;
  ticketId: string;
  ticketTitle: string;
};

export function TicketDetailModal({
  isOpen,
  onClose,
  ticketId,
  ticketTitle,
}: TicketDetailModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <button
        type="button"
        aria-label="Close dialog"
        className="fixed inset-0 z-50 w-full cursor-default bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="fixed top-[50%] left-[50%] z-50 flex max-h-[90vh] w-full max-w-5xl translate-x-[-50%] translate-y-[-50%] flex-col gap-4 overflow-hidden border bg-background p-6 shadow-lg sm:rounded-2xl">
        {/* Header */}
        <div className="mb-2 flex shrink-0 items-center justify-between">
          <div className="flex items-center gap-2 text-xl font-bold">
            <span className="text-blue-600">#{ticketId}</span>
            <span className="mx-2 font-normal text-muted-foreground">—</span>
            <span>{ticketTitle}</span>
          </div>
          <button
            onClick={onClose}
            className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex h-full min-h-0 flex-1 flex-col gap-6 overflow-hidden md:flex-row">
          {/* Left Column: Ticket Information */}
          <div className="flex w-full flex-col gap-6 overflow-y-auto border-r pr-6 pb-4 md:w-1/3">
            <div>
              <h4 className="mb-3 flex items-center gap-1 text-xs font-semibold text-muted-foreground uppercase">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-slate-200 text-[10px]">
                  ℹ
                </span>{' '}
                TICKET INFORMATION
              </h4>

              <div className="space-y-4">
                <div>
                  <p className="mb-1 text-xs text-muted-foreground uppercase">STATUS</p>
                  <Badge
                    variant="outline"
                    className="border-green-200 bg-green-100 text-green-700 hover:bg-green-100"
                  >
                    <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-green-500"></span>{' '}
                    {ticketDetailMock.status}
                  </Badge>
                </div>

                <div>
                  <p className="mb-1 text-xs text-muted-foreground uppercase">TITLE</p>
                  <p className="text-sm font-semibold">{ticketDetailMock.title}</p>
                </div>

                <div>
                  <p className="mb-1 text-xs text-muted-foreground uppercase">CONTENT</p>
                  <p className="text-sm text-slate-700">{ticketDetailMock.content}</p>
                </div>

                <div>
                  <p className="mb-1 text-xs text-muted-foreground uppercase">ASSIGNED TO</p>
                  <div className="mt-1 flex items-center gap-3">
                    <Image
                      src={ticketDetailMock.assignee.avatar}
                      alt="Assignee"
                      width={32}
                      height={32}
                      className="h-8 w-8 rounded-full"
                      unoptimized
                    />
                    <div>
                      <p className="text-sm font-semibold">{ticketDetailMock.assignee.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {ticketDetailMock.assignee.role}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="mb-2 text-xs text-muted-foreground uppercase">ATTACHMENTS</p>
                  {ticketDetailMock.attachments.map((file, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 rounded-lg border bg-muted/20 p-2"
                    >
                      <div className="rounded-md bg-red-50 p-1.5 text-red-500">
                        <FileText className="h-4 w-4" />
                      </div>
                      <p className="truncate text-xs font-medium">{file.name}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-2 grid grid-cols-2 gap-4">
                  <div>
                    <p className="mb-1 text-xs text-muted-foreground uppercase">CREATED</p>
                    <p className="text-xs font-semibold">{ticketDetailMock.created}</p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs text-muted-foreground uppercase">DEADLINE</p>
                    <p className="text-xs font-semibold">{ticketDetailMock.deadline}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Activity History */}
          <div className="flex h-full flex-1 flex-col overflow-hidden">
            <h4 className="mb-4 flex shrink-0 items-center gap-1 text-xs font-semibold text-muted-foreground uppercase">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-slate-200 text-[10px]">
                ↻
              </span>{' '}
              ACTIVITY HISTORY
            </h4>

            <div className="flex-1 space-y-6 overflow-y-auto pr-4">
              {ticketHistory.map((item, index) => (
                <div key={item.id} className="relative flex gap-4">
                  {/* Timeline connecting line */}
                  {index !== ticketHistory.length - 1 && (
                    <div className="absolute top-8 bottom-[-24px] left-[15px] w-[2px] bg-border"></div>
                  )}

                  {/* Timeline icon */}
                  <div className="z-10 mt-1 shrink-0">
                    {item.type === 'status' && (
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white ring-4 ring-background">
                        <Check className="h-4 w-4" />
                      </div>
                    )}
                    {item.type === 'attachment' && (
                      <Image
                        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                        alt="User"
                        width={32}
                        height={32}
                        className="h-8 w-8 rounded-full ring-4 ring-background"
                        unoptimized
                      />
                    )}
                    {item.type === 'note' && (
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-white ring-4 ring-background">
                        <Edit2 className="h-4 w-4" />
                      </div>
                    )}
                    {item.type === 'create' && (
                      <Image
                        src="https://i.pravatar.cc/150?u=fake_user"
                        alt="User"
                        width={32}
                        height={32}
                        className="h-8 w-8 rounded-full ring-4 ring-background"
                        unoptimized
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-4">
                    <div className="mb-2 flex items-start justify-between">
                      <p className="text-sm">
                        <span className="font-bold text-slate-800">{item.user}</span>{' '}
                        <span className="text-slate-600">{item.action}</span>
                      </p>
                      <span className="text-xs whitespace-nowrap text-muted-foreground">
                        {item.time}
                      </span>
                    </div>

                    {item.comment && (
                      <div
                        className={`rounded-xl border p-3 ${item.type === 'note' ? 'border-l-4 border-blue-100 border-l-blue-500 bg-blue-50/50' : 'bg-muted/30'}`}
                      >
                        {item.type === 'note' && (
                          <p className="mb-1 text-[10px] font-bold text-blue-500">NOTE</p>
                        )}
                        <p className="text-sm text-slate-700">{item.comment}</p>
                      </div>
                    )}

                    {item.file && (
                      <div className="flex w-max items-center gap-3 rounded-lg border bg-muted/20 p-2 pr-6">
                        <div className="rounded-md bg-red-50 p-1.5 text-red-500">
                          <FileText className="h-4 w-4" />
                        </div>
                        <p className="text-xs font-medium">{item.file}</p>
                        <button className="ml-4 text-[10px] font-bold text-blue-600">VIEW</button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer / Input */}
            <div className="mt-auto flex shrink-0 justify-end gap-3 border-t pt-4">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">Add Comment</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
