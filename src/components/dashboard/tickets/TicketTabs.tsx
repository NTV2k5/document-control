import type { Dispatch, SetStateAction } from 'react';

type Tab = {
  id: string;
  label: string;
  count: number | null;
  highlight?: boolean;
}

type TicketTabsProps = {
  tabs: Tab[];
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

export function TicketTabs({ tabs, activeTab, setActiveTab }: TicketTabsProps) {
  return (
    <div className="mb-4 flex flex-wrap gap-2">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => {
            setActiveTab(tab.id);
          }}
          className={`flex cursor-pointer items-center rounded-full px-4 py-1.5 text-xs font-bold transition-colors ${
            activeTab === tab.id
              ? 'bg-blue-600 text-white shadow-sm'
              : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
          }`}
        >
          {tab.label}
          {tab.count !== null && (
            <span
              className={`ml-2 flex h-4 min-w-[16px] items-center justify-center rounded-full px-1 text-[10px] text-white ${
                activeTab === tab.id ? 'bg-red-500' : 'bg-red-500'
              }`}
            >
              {tab.count}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
