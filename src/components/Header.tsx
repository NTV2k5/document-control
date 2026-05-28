import { Search, Filter, Mic, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-card px-8">
      <div className="flex flex-1 items-center gap-4">
        <div className="relative flex w-full max-w-2xl items-center">
          <Search className="absolute left-4 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Global Document Search (e.g., 'GDPR', 'Policy 2024', 'Drafts')"
            className="h-12 w-full rounded-full bg-muted/50 pr-36 pl-12 text-sm"
          />
          <div className="absolute right-2 flex items-center gap-2">
            <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground">
              <Filter className="h-4 w-4" /> Filter
            </button>
            <button className="text-muted-foreground hover:text-foreground">
              <Mic className="h-5 w-5" />
            </button>
            <Button
              size="default"
              className="h-9 rounded-full bg-blue-600 px-6 text-sm text-white hover:bg-blue-700"
            >
              Search
            </Button>
          </div>
        </div>
      </div>
      <div className="ml-4 flex items-center gap-6">
        {/* Pill-shaped Language Toggle */}
        <div className="flex h-8 w-20 cursor-pointer items-center rounded-full bg-slate-100 p-1 transition-colors hover:bg-slate-200">
          <div className="flex h-full w-1/2 items-center justify-center rounded-full bg-white shadow-sm">
            <span className="text-xs font-bold text-slate-900">VN</span>
          </div>
          <div className="flex h-full w-1/2 items-center justify-center rounded-full">
            <span className="text-xs font-bold text-slate-500">EN</span>
          </div>
        </div>

        {/* Notification Bell */}
        <button className="relative text-muted-foreground hover:text-foreground">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2 rounded-full border border-white bg-destructive"></span>
        </button>
      </div>
    </header>
  );
}
