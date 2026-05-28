'use client';

import { Key } from 'lucide-react';
import { PersonalInfo } from '@/components/dashboard/user-profile/PersonalInfo';
import { ProfileHeader } from '@/components/dashboard/user-profile/ProfileHeader';
import { RecentActivity } from '@/components/dashboard/user-profile/RecentActivity';
import { StorageAnalytics } from '@/components/dashboard/user-profile/StorageAnalytics';
import { Card, CardContent } from '@/components/ui/card';

export default function UserProfile() {
  return (
    <div className="space-y-8 pb-10">
      <div className="mb-6">
        <h2 className="text-3xl font-bold">My Profile</h2>
        <p className="mt-1 text-sm font-medium text-slate-500">Dashboard &gt; Account Settings</p>
      </div>

      <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
        {/* Main Content Area */}
        <div className="space-y-8 xl:col-span-2">
          <ProfileHeader />
          <PersonalInfo />
        </div>

        {/* Right Sidebar */}
        <div className="space-y-8">
          <StorageAnalytics />
          <RecentActivity />

          {/* Change Password */}
          <Card className="cursor-pointer rounded-3xl border-none shadow-sm ring-1 ring-slate-100/50 transition-colors hover:bg-slate-50">
            <CardContent className="p-4">
              <button className="flex w-full items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-500">
                    <Key className="h-5 w-5" />
                  </div>
                  <span className="font-bold text-slate-800">Change Password</span>
                </div>
                <span className="font-bold text-slate-400">&gt;</span>
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
