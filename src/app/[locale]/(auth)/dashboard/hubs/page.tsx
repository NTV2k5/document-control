'use client';

import { Filter } from 'lucide-react';
import { HubRecentActivity } from '@/components/dashboard/hubs/HubRecentActivity';
import { HubSection } from '@/components/dashboard/hubs/HubSection';
import { MyHubSummary } from '@/components/dashboard/my-hubs/MyHubSummary';
import { TrendingHashtags } from '@/components/dashboard/TrendingHashtags';
import { Button } from '@/components/ui/button';
import {
  universityDepartments,
  universityProjects,
  hubSummaryCards,
  recentActivity,
  trendingTags,
} from '@/utils/mockData';

export default function UniversityHubs() {
  return (
    <div className="space-y-8 pb-8">
      <TrendingHashtags tags={trendingTags} />
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900">University Hub</h2>
        <Button
          variant="outline"
          className="flex cursor-pointer items-center gap-2 rounded-full px-5 font-bold shadow-sm"
        >
          <Filter className="h-4 w-4" /> Filter
        </Button>
      </div>

      {/* Hub Summary Cards */}
      <MyHubSummary cards={hubSummaryCards} />

      {/* Departments */}
      <HubSection
        title="Departments"
        titleIcon="🏛"
        actionText="View Directory"
        items={universityDepartments}
        labels={{ rename: 'Rename Dept', archive: 'Archive Dept' }}
      />

      {/* Active Projects */}
      <HubSection
        title="Active Projects"
        titleIcon="⚛"
        actionText="View All Projects"
        items={universityProjects}
        labels={{ rename: 'Rename Project', archive: 'Archive Project' }}
      />

      {/* Recent Activity Table */}
      <HubRecentActivity activityList={recentActivity} />
    </div>
  );
}
