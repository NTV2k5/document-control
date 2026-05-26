import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { headers } from 'next/headers';
import { Header } from '@/components/ui/Header';
import { Sidebar } from '@/components/ui/Sidebar';

type DashboardLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateMetadata(): Metadata {
  return {
    title: 'Document Control - Admin',
    description: 'Smart Data Hub Dashboard',
  };
}

export default async function DashboardLayout(props: DashboardLayoutProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const headersList = await headers();
  const currentPath = headersList.get('x-invoke-path') ?? '/dashboard';

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar currentPath={currentPath} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-8">{props.children}</main>
      </div>
    </div>
  );
}
