import { Bot } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
type OverviewBannerProps = {
  trendingData: { rank: string | number; title: string; dept: string }[];
};

export function OverviewBanner({ trendingData }: OverviewBannerProps) {
  return (
    <div className="mb-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900">Overview</h2>
        <div className="flex -space-x-3">
          <Image
            src="https://i.pravatar.cc/150?u=1"
            alt="Avatar"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full border-2 border-white object-cover"
            unoptimized
          />
          <Image
            src="https://i.pravatar.cc/150?u=2"
            alt="Avatar"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full border-2 border-white object-cover"
            unoptimized
          />
          <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-slate-900 text-xs font-medium text-white">
            +24
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="relative flex min-h-[320px] flex-col justify-center overflow-hidden rounded-3xl bg-slate-900 p-8 text-white shadow-lg md:p-10 lg:col-span-2">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>

          <div className="relative z-10 flex w-full items-center justify-between">
            {/* Glassmorphism wrapper for text and buttons */}
            <div className="max-w-md rounded-2xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-md md:p-8">
              <h1 className="mb-4 text-2xl leading-tight font-extrabold text-white md:text-3xl">
                GDU Portal <br /> <span className="text-cyan-400">Document Control</span>
              </h1>
              <p className="mb-4 text-sm leading-relaxed font-medium text-slate-200">
                Experience a centralized, transparent, and AI-driven ecosystem for university-wide
                policy management.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button className="h-11 rounded-full bg-blue-600 px-8 text-[14px] font-bold text-white shadow-md hover:bg-blue-700">
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  className="h-11 rounded-full border-white/20 bg-white/10 px-6 text-[14px] font-bold text-white shadow-md backdrop-blur-sm hover:bg-white/20"
                >
                  <Bot className="mr-2 h-5 w-5" /> AI Assist
                </Button>
              </div>
            </div>

            {/* University Logo */}
            <div className="pointer-events-none hidden items-center justify-center md:flex">
              <div className="relative h-[280px] w-[280px] drop-shadow-[0_0_20px_rgba(255,255,255,0.25)] lg:h-[320px] lg:w-[320px]">
                <Image
                  src="/logo-dai-hoc-gia-dinh-2025.svg"
                  alt="Gia Dinh University Logo"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>

        <Card className="relative overflow-hidden rounded-3xl border-none bg-blue-600 text-white shadow-lg">
          <div className="pointer-events-none absolute top-0 right-0 -mt-16 -mr-16 rounded-full bg-blue-500 p-32 opacity-50 blur-3xl"></div>
          <CardContent className="relative z-10 p-8">
            <h3 className="mb-6 text-sm font-bold tracking-wider text-blue-100 uppercase">
              TRENDING NOW
            </h3>
            <div className="space-y-4">
              {trendingData.map((item, i) => (
                <div
                  key={i}
                  className="flex cursor-pointer items-center gap-4 rounded-xl border border-blue-500/30 bg-blue-700/50 p-4 transition-colors hover:bg-blue-700/80"
                >
                  <span className="w-6 text-xl font-light text-blue-300">{item.rank}</span>
                  <div>
                    <p className="text-sm leading-tight font-bold text-white">{item.title}</p>
                    <p className="mt-1 text-xs font-medium text-blue-200">{item.dept}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
