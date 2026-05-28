'use client';

import { Filter, FolderPlus, FilePlus } from 'lucide-react';
import { HubRecentActivity } from '@/components/dashboard/hubs/HubRecentActivity';
import { MyHubFolders } from '@/components/dashboard/my-hubs/MyHubFolders';
import { MyHubSummary } from '@/components/dashboard/my-hubs/MyHubSummary';
import { TrendingHashtags } from '@/components/dashboard/TrendingHashtags';
import { Button } from '@/components/ui/button';
import { recentActivity } from '@/utils/mockData';

export default function MyHubs() {
  return (
    <div className="space-y-8 pb-10">
      <TrendingHashtags />

      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">My Hubs</h2>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" /> Filter
        </Button>
      </div>

      {/* Hub Summary Cards */}
      <MyHubSummary />

      {/* Folders */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-bold">Folders</h3>
          <div className="flex gap-3">
            <Button className="bg-blue-600 text-xs hover:bg-blue-700">
              <FolderPlus className="mr-2 h-4 w-4" /> Create Folder
            </Button>
            <Button variant="outline" className="text-xs">
              <FilePlus className="mr-2 h-4 w-4" /> Add File
            </Button>
          </div>
        </div>

        <MyHubFolders />
      </div>

      {/* Recent Activity Table (Reusing component from Hubs) */}
      <HubRecentActivity activityList={recentActivity} />
    </div>
  );
}
