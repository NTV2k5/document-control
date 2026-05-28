'use client';

import {
  LayoutDashboard,
  FileText,
  FolderGit2,
  Folders,
  Ticket,
  Share2,
  Users,
  Trash2,
  Settings,
} from 'lucide-react';
import Image from 'next/image';
import { Logo } from '@/components/Logo';
import { Link, usePathname } from '@/libs/I18nNavigation';
import { cn } from '@/utils/cn';

const SidebarItem = ({
  icon: Icon,
  label,
  active,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  active?: boolean;
  href: string;
}) => (
  <Link
    href={href}
    className={cn(
      'flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-muted',
      active
        ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/20 hover:bg-blue-700'
        : 'text-slate-500 hover:text-slate-900',
    )}
  >
    <Icon className="h-4 w-4" />
    <span className="text-sm font-medium">{label}</span>
  </Link>
);

export function Sidebar() {
  const currentPath = usePathname();
  return (
    <div className="flex h-screen w-64 flex-col border-r bg-card px-4 py-6">
      <Link href="/dashboard" className="mb-8 block transition-opacity hover:opacity-80">
        <Logo />
      </Link>

      <div className="flex-1 space-y-8">
        <nav className="space-y-1">
          <SidebarItem
            href="/dashboard"
            icon={LayoutDashboard}
            label="Overview"
            active={currentPath === '/dashboard'}
          />
          <SidebarItem
            href="/dashboard/published"
            icon={FileText}
            label="Published Documents"
            active={currentPath.includes('/published')}
          />
          <SidebarItem
            href="/dashboard/hubs"
            icon={FolderGit2}
            label="University Hubs"
            active={currentPath.includes('/hubs')}
          />
          <SidebarItem
            href="/dashboard/my-hubs"
            icon={Folders}
            label="My Hubs"
            active={currentPath.includes('/my-hubs')}
          />
          <SidebarItem
            href="/dashboard/tickets"
            icon={Ticket}
            label="Tickets"
            active={currentPath.includes('/tickets')}
          />
        </nav>

        <div>
          <h3 className="mb-2 px-4 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
            Management
          </h3>
          <nav className="space-y-1">
            <SidebarItem href="#" icon={Share2} label="Sharing" />
            <SidebarItem href="#" icon={Users} label="Shared" />
            <SidebarItem href="#" icon={Trash2} label="Recycle Bin" />
            <SidebarItem href="#" icon={Settings} label="Settings" />
          </nav>
        </div>
      </div>

      <div className="mt-auto">
        <div className="rounded-xl border bg-muted/50 p-4">
          <Link
            href="/dashboard/user-profile"
            className="mb-4 flex items-center gap-3 transition-opacity hover:opacity-80"
          >
            <Image
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              alt="User"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full"
              unoptimized
            />
            <div>
              <p className="text-sm font-semibold">Dr. Sarah Jenkins</p>
              <p className="text-xs text-muted-foreground">Dean of Information</p>
            </div>
          </Link>

          <div className="mb-4 rounded-lg bg-indigo-900 p-3 text-white">
            <p className="mb-1 text-xs text-indigo-200">STORAGE USAGE</p>
            <p className="mb-2 text-sm font-bold">4.2 TB / 10 TB</p>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-indigo-950">
              <div className="h-full bg-white" style={{ width: '42%' }} />
            </div>
          </div>

          <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-destructive/20 py-2 text-sm font-medium text-destructive transition-colors hover:bg-destructive/10">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
