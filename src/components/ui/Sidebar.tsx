import * as React from "react";
import { cn } from "@/utils/cn";
import { 
  LayoutDashboard, 
  FileText, 
  FolderGit2, 
  Folders, 
  Ticket, 
  Share2, 
  Users, 
  Trash2, 
  Settings 
} from "lucide-react";
import { Link } from "@/libs/I18nNavigation";

const SidebarItem = ({ icon: Icon, label, active, href }: { icon: any; label: string; active?: boolean; href: string }) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-muted",
        active ? "bg-primary text-primary-foreground hover:bg-primary" : "text-muted-foreground"
      )}
    >
      <Icon className="h-4 w-4" />
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
};

export function Sidebar({ currentPath }: { currentPath: string }) {
  return (
    <div className="flex h-screen w-64 flex-col border-r bg-card px-4 py-6">
      <div className="mb-8 flex items-center gap-2 px-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
          <span className="text-lg font-bold text-primary-foreground">M</span>
        </div>
        <div>
          <h2 className="text-lg font-bold leading-tight">Document Control</h2>
          <p className="text-xs text-primary font-semibold tracking-wide">ADMIN</p>
        </div>
      </div>

      <div className="flex-1 space-y-8">
        <nav className="space-y-1">
          <SidebarItem href="/dashboard" icon={LayoutDashboard} label="Overview" active={currentPath === "/dashboard"} />
          <SidebarItem href="/dashboard/published" icon={FileText} label="Published Documents" active={currentPath.includes("/published")} />
          <SidebarItem href="/dashboard/hubs" icon={FolderGit2} label="University Hubs" active={currentPath.includes("/hubs")} />
          <SidebarItem href="#" icon={Folders} label="My Hubs" />
          <SidebarItem href="#" icon={Ticket} label="Tickets" />
        </nav>

        <div>
          <h3 className="mb-2 px-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
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
          <div className="mb-4 flex items-center gap-3">
            <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="User" className="h-10 w-10 rounded-full" />
            <div>
              <p className="text-sm font-semibold">Dr. Sarah Jenkins</p>
              <p className="text-xs text-muted-foreground">Dean of Information</p>
            </div>
          </div>
          
          <div className="mb-4 rounded-lg bg-indigo-900 p-3 text-white">
            <p className="mb-1 text-xs text-indigo-200">STORAGE USAGE</p>
            <p className="mb-2 text-sm font-bold">4.2 TB / 10 TB</p>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-indigo-950">
              <div className="h-full bg-white" style={{ width: "42%" }} />
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
