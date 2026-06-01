import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { ChatbotButton } from '@/components/ChatbotButton';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { SidebarProvider } from '@/components/SidebarContext';

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

  return (
    <SidebarProvider>
      <div className="flex h-screen overflow-hidden bg-background">
        <Sidebar />
        <div className="flex flex-1 flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">{props.children}</main>
        </div>
        <ChatbotButton />
      </div>
    </SidebarProvider>
  );
}
