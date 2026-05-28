import { trendingTags } from '@/utils/mockData';

export function TrendingHashtags() {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="mr-2 text-sm font-semibold tracking-wider text-muted-foreground uppercase">
        TRENDING
      </span>
      <div className="flex flex-wrap items-center gap-3">
        {trendingTags.map((tag, i) => {
          const isBlue = i % 2 !== 0; // Alternate colors
          return (
            <button
              key={i}
              className={`rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-bold shadow-sm transition-all hover:shadow-md ${
                isBlue ? 'text-blue-700' : 'text-slate-800'
              }`}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </div>
  );
}
