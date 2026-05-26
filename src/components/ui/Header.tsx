import * as React from "react";
import { Search, Filter, Mic, Bell } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-card px-8">
      <div className="flex flex-1 items-center gap-4">
        <div className="relative w-full max-w-2xl flex items-center">
          <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
          <Input 
            type="text" 
            placeholder="Global Document Search (e.g., 'GDPR', 'Policy 2024', 'Drafts')" 
            className="w-full rounded-full bg-muted/50 pl-10 pr-32"
          />
          <div className="absolute right-2 flex items-center gap-2">
            <button className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground">
              <Filter className="h-3 w-3" /> Filter
            </button>
            <button className="text-muted-foreground hover:text-foreground">
              <Mic className="h-4 w-4" />
            </button>
            <Button size="sm" className="h-7 rounded-full px-4 text-xs">Search</Button>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 ml-4">
        <div className="flex items-center gap-1 text-sm font-medium">
          <span className="text-foreground">VN</span>
          <span className="text-muted-foreground">|</span>
          <span className="text-muted-foreground">EN</span>
        </div>
        <button className="relative text-muted-foreground hover:text-foreground">
          <Bell className="h-5 w-5" />
          <span className="absolute -right-0.5 -top-0.5 flex h-2 w-2 rounded-full bg-destructive"></span>
        </button>
      </div>
    </header>
  );
}
