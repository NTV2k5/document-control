import { LayoutGrid, List } from 'lucide-react';

type PublishedTabsProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
  counts: { all: number; academic: number; financial: number };
};

export function PublishedTabs({
  activeTab,
  setActiveTab,
  viewMode,
  setViewMode,
  counts,
}: PublishedTabsProps) {
  return (
    <div className="mb-6 flex items-center justify-between border-b border-border pb-2">
      <div className="flex gap-8">
        <button
          onClick={() => {
            setActiveTab('all');
          }}
          className={`pb-2 text-sm font-bold tracking-wider uppercase transition-colors ${
            activeTab === 'all'
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          ALL ({counts.all})
        </button>
        <button
          onClick={() => {
            setActiveTab('academic');
          }}
          className={`pb-2 text-sm font-bold tracking-wider uppercase transition-colors ${
            activeTab === 'academic'
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          ACADEMIC DOCS ({counts.academic})
        </button>
        <button
          onClick={() => {
            setActiveTab('financial');
          }}
          className={`pb-2 text-sm font-bold tracking-wider uppercase transition-colors ${
            activeTab === 'financial'
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          FINANCIAL ({counts.financial})
        </button>
      </div>
      <div className="flex items-center gap-2">
        <button
          className={`cursor-pointer rounded-md p-2 transition-colors ${
            viewMode === 'grid'
              ? 'bg-blue-100 text-blue-600'
              : 'text-muted-foreground hover:bg-muted'
          }`}
          onClick={() => {
            setViewMode('grid');
          }}
        >
          <LayoutGrid className="h-5 w-5" />
        </button>
        <button
          className={`cursor-pointer rounded-md p-2 transition-colors ${
            viewMode === 'list'
              ? 'bg-blue-100 text-blue-600'
              : 'text-muted-foreground hover:bg-muted'
          }`}
          onClick={() => {
            setViewMode('list');
          }}
        >
          <List className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
