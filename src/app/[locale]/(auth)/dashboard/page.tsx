import { setRequestLocale } from 'next-intl/server';
import { EngagementAnalytics } from '@/components/dashboard/EngagementAnalytics';
import { FileDistribution } from '@/components/dashboard/FileDistribution';
import { ImportantAlert } from '@/components/dashboard/ImportantAlert';
import { LatestPublished } from '@/components/dashboard/LatestPublished';
import { OverviewBanner } from '@/components/dashboard/OverviewBanner';
import { QuickAccess } from '@/components/dashboard/QuickAccess';
import { RecentlyInteracted } from '@/components/dashboard/RecentlyInteracted';
import { StatsOverview } from '@/components/dashboard/StatsOverview';
import { TrendingHashtags } from '@/components/dashboard/TrendingHashtags';

export default async function DashboardOverview(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div className="space-y-8 pb-10">
      {/* Trending Tags */}
      <TrendingHashtags />

      {/* Hero Banner & Trending Now */}
      <OverviewBanner />

      {/* Stats Cards */}
      <StatsOverview />

      {/* Analytics Charts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <EngagementAnalytics />
        <FileDistribution />
      </div>

      {/* Important Unread Alert */}
      <ImportantAlert />

      {/* Latest Published */}
      <LatestPublished />

      {/* Recently Interacted */}
      <RecentlyInteracted />

      {/* Quick Access */}
      <QuickAccess />
    </div>
  );
}
