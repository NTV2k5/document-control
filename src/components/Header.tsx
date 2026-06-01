'use client';

import { Search, Filter, Mic, Bell, Menu } from 'lucide-react';
import { useSidebar } from '@/components/SidebarContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Header() {
  const { toggle } = useSidebar();

  return (
    <header className="flex h-14 items-center justify-between border-b bg-card px-4 md:h-16 md:px-6 lg:px-8">
      <div className="flex flex-1 items-center gap-3">
        {/* Hamburger — visible on mobile/tablet only */}
        <button
          onClick={toggle}
          className="shrink-0 rounded-lg p-2 text-muted-foreground hover:bg-muted hover:text-foreground lg:hidden"
          aria-label="Toggle sidebar"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="relative flex w-full max-w-2xl items-center">
          <Search className="absolute left-3 h-4 w-4 text-muted-foreground md:left-4 md:h-5 md:w-5" />
          <Input
            type="text"
            placeholder="Search..."
            className="h-10 w-full rounded-full bg-muted/50 pr-12 pl-9 text-sm md:h-12 md:pr-36 md:pl-12 md:placeholder:content-['Global_Document_Search']"
          />
          {/* Filter / Mic / Search button — hidden on mobile */}
          <div className="absolute right-2 hidden items-center gap-2 md:flex">
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
      <div className="ml-3 flex items-center gap-4 md:ml-4 md:gap-6">
        {/* Pill-shaped Language Toggle */}
        <div className="hidden h-8 w-20 cursor-pointer items-center rounded-full bg-slate-100 p-1 transition-colors hover:bg-slate-200 sm:flex">
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
