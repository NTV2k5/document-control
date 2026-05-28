import { Landmark } from 'lucide-react';
import { cn } from '@/utils/cn';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 shadow-md shadow-blue-500/30">
        <Landmark className="h-5 w-5 text-white" />
      </div>
      <div>
        <h2 className="text-lg leading-tight font-bold whitespace-nowrap">Document Control</h2>
        <p className="text-xs font-semibold tracking-wide text-blue-600 uppercase">ADMIN</p>
      </div>
    </div>
  );
}
