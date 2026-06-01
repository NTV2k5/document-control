'use client';

import { useClerk } from '@clerk/nextjs';
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
  LogOut,
  X,
} from 'lucide-react';
import Image from 'next/image';
import { Logo } from '@/components/Logo';
import { useSidebar } from '@/components/SidebarContext';
import { Link, usePathname } from '@/libs/I18nNavigation';
import { cn } from '@/utils/cn';

const SidebarItem = ({
  icon: Icon,
  label,
  active,
  href,
  onClick,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  active?: boolean;
  href: string;
  onClick?: () => void;
}) => (
  <Link
    href={href}
    onClick={onClick}
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

/** Sidebar content shared between desktop (static) and mobile (drawer). */
function SidebarContent(props: { onNavigate?: () => void }) {
  const currentPath = usePathname();
  const { signOut } = useClerk();

  return (
    <>
      <Link
        href="/dashboard"
        className="mb-8 block transition-opacity hover:opacity-80"
        onClick={props.onNavigate}
      >
        <Logo />
      </Link>

      <div className="flex-1 space-y-8">
        <nav className="space-y-1">
          <SidebarItem
            href="/dashboard"
            icon={LayoutDashboard}
            label="Overview"
            active={currentPath === '/dashboard'}
            onClick={props.onNavigate}
          />
          <SidebarItem
            href="/dashboard/published"
            icon={FileText}
            label="Published Documents"
            active={currentPath.includes('/published')}
            onClick={props.onNavigate}
          />
          <SidebarItem
            href="/dashboard/hubs"
            icon={FolderGit2}
            label="University Hubs"
            active={currentPath.includes('/hubs')}
            onClick={props.onNavigate}
          />
          <SidebarItem
            href="/dashboard/my-hubs"
            icon={Folders}
            label="My Hubs"
            active={currentPath.includes('/my-hubs')}
            onClick={props.onNavigate}
          />
          <SidebarItem
            href="/dashboard/tickets"
            icon={Ticket}
            label="Tickets"
            active={currentPath.includes('/tickets')}
            onClick={props.onNavigate}
          />
        </nav>

        <div>
          <h3 className="mb-2 px-4 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
            Management
          </h3>
          <nav className="space-y-1">
            <SidebarItem href="#" icon={Share2} label="Sharing" onClick={props.onNavigate} />
            <SidebarItem href="#" icon={Users} label="Shared" onClick={props.onNavigate} />
            <SidebarItem href="#" icon={Trash2} label="Recycle Bin" onClick={props.onNavigate} />
            <SidebarItem href="#" icon={Settings} label="Settings" onClick={props.onNavigate} />
          </nav>
        </div>
      </div>

      <div className="mt-auto">
        <div className="rounded-xl border bg-muted/50 p-4">
          <Link
            href="/dashboard/user-profile"
            className="mb-4 flex items-center gap-3 transition-opacity hover:opacity-80"
            onClick={props.onNavigate}
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

          <button
            onClick={async () => await signOut()}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-destructive/20 py-2 text-sm font-medium text-destructive transition-colors hover:bg-destructive/10"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
}

export function Sidebar() {
  const { isOpen, close } = useSidebar();

  return (
    <>
      {/* Desktop sidebar — always visible on lg+ */}
      <div className="hidden h-screen w-64 shrink-0 flex-col border-r bg-card px-4 py-6 lg:flex">
        <SidebarContent />
      </div>

      {/* Mobile/Tablet overlay drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={close} />

          {/* Drawer */}
          <div className="animate-in slide-in-from-left absolute inset-y-0 left-0 flex w-72 flex-col bg-card px-4 py-6 shadow-2xl duration-300">
            {/* Close button */}
            <button
              onClick={close}
              className="absolute top-4 right-4 rounded-lg p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>

            <SidebarContent onNavigate={close} />
          </div>
        </div>
      )}
    </>
  );
}
