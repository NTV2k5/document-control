'use client';

import {
  FileText,
  ShieldAlert,
  ArrowRight,
  BookOpen,
  Settings,
  Bot,
  FileSpreadsheet,
  FileImage,
  FileVideo,
  FileArchive,
  UploadCloud,
} from 'lucide-react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Rectangle } from 'recharts';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { latestPublished, recentlyInteracted } from '@/utils/mockData';

const dataBar = [
  { name: '22TH JAN', views: 4000 },
  { name: '23TH JAN', views: 3000 },
  { name: '24TH JAN', views: 2000 },
  { name: '25TH JAN', views: 2780 },
  { name: '26TH JAN', views: 1890 },
  { name: '27TH JAN', views: 2390 },
  { name: 'TODAY', views: 3490 },
];

const dataPie = [
  { name: 'DOCUMENTS', value: 428, color: '#3b82f6' },
  { name: 'IMAGES', value: 544, color: '#10b981' },
  { name: 'VIDEOS', value: 312, color: '#f59e0b' },
  { name: 'OTHERS', value: 120, color: '#ef4444' },
];

function getDocTypeClass(type: string): string {
  if (type === 'WORD') {
    return 'bg-blue-50 text-blue-600';
  }
  if (type === 'EXCEL') {
    return 'bg-green-50 text-green-600';
  }
  if (type === 'PDF') {
    return 'bg-red-50 text-red-600';
  }
  if (type === 'IMAGE') {
    return 'bg-amber-50 text-amber-600';
  }
  return 'bg-purple-50 text-purple-600';
}

function getBadgeVariant(type: string): 'default' | 'success' | 'warning' {
  if (type === 'REGULATION') {
    return 'default';
  }
  if (type === 'POLICY') {
    return 'success';
  }
  return 'warning';
}

export default function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Trending Tags */}
      <div className="mb-6 flex items-center gap-2">
        <span className="mr-2 text-sm text-muted-foreground">TRENDING</span>
        <Badge variant="trending">#AIEthics</Badge>
        <Badge variant="trending">#QuantumComputing</Badge>
        <Badge variant="trending">#ModernArchitecture</Badge>
        <Badge variant="trending">#Sustainability</Badge>
        <Badge variant="trending">#Neuroscience</Badge>
        <Badge variant="trending">#DigitalHumanities</Badge>
      </div>

      {/* Hero Banner & Trending Now */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="relative flex min-h-[300px] flex-col justify-center overflow-hidden rounded-2xl bg-slate-900 p-8 text-white lg:col-span-2">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
          <div className="relative z-10 max-w-lg space-y-4">
            <h1 className="text-4xl font-bold">
              GDU Portal <br /> <span className="text-cyan-400">Document Control</span>
            </h1>
            <p className="text-slate-300">
              Experience a centralized, transparent, and AI-driven ecosystem for university-wide
              policy management.
            </p>
            <div className="flex gap-4 pt-4">
              <Button className="rounded-full bg-blue-600 px-8 text-white hover:bg-blue-700">
                Get Started
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-white/20 bg-white/10 text-white hover:bg-white/20"
              >
                <Bot className="mr-2 h-4 w-4" /> AI Assist
              </Button>
            </div>
          </div>
        </div>

        <Card className="rounded-2xl border-none bg-blue-600 text-white">
          <CardContent className="p-6">
            <h3 className="mb-4 font-semibold text-blue-100">TRENDING NOW</h3>
            <div className="space-y-4">
              {[
                {
                  rank: '01',
                  title: 'Exam Preparation: AI Tools Policy',
                  dept: '120 views • Academic Affairs',
                },
                {
                  rank: '02',
                  title: 'Summer Internship 2024 Portal Open',
                  dept: '200 entries • Career Hub',
                },
                {
                  rank: '03',
                  title: 'New Student Housing Regulations',
                  dept: '450 views • Housing Office',
                },
                {
                  rank: '04',
                  title: 'New Student Housing Regulations',
                  dept: '450 views • Housing Office',
                },
                {
                  rank: '05',
                  title: 'New Student Housing Regulations',
                  dept: '450 views • Housing Office',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="text-lg font-light text-blue-300">{item.rank}</span>
                  <div>
                    <p className="text-sm leading-tight font-medium">{item.title}</p>
                    <p className="mt-1 text-xs text-blue-200">{item.dept}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card>
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="mb-1 text-xs font-medium tracking-wider text-muted-foreground uppercase">
                Published Files
              </p>
              <h4 className="text-3xl font-bold">1,284</h4>
              <p className="mt-1 text-xs text-green-600">↗ +12% this month</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <FileText className="h-6 w-6" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="mb-1 text-xs font-medium tracking-wider text-muted-foreground uppercase">
                My Files
              </p>
              <h4 className="text-3xl font-bold">452</h4>
              <p className="mt-1 text-xs text-green-600">↗ +5% increase this month</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-50 text-cyan-600">
              <ShieldAlert className="h-6 w-6" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="mb-1 text-xs font-medium tracking-wider text-muted-foreground uppercase">
                Sharing Files
              </p>
              <h4 className="text-3xl font-bold">50</h4>
              <p className="mt-1 text-xs text-muted-foreground">Sharing for 38 emails</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-600">
              <Settings className="h-6 w-6" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Analytics Charts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <div className="mb-6 flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold">Engagement Analytics</h3>
                <p className="text-sm text-muted-foreground">File views last week.</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-blue-600">24.5k</p>
                <p className="text-xs text-green-600">+18.2%</p>
              </div>
            </div>
            <div className="h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dataBar}>
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 10, fill: '#94a3b8' }}
                  />
                  <Tooltip cursor={{ fill: '#f1f5f9' }} />
                  <Bar
                    dataKey="views"
                    fill="#cbd5e1"
                    radius={[4, 4, 0, 0]}
                    activeBar={<Rectangle fill="#3b82f6" />}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="mb-1 text-lg font-semibold">File Distribution</h3>
            <p className="mb-6 text-sm text-muted-foreground">Split by file type</p>
            <div className="flex flex-col items-center gap-8 md:flex-row">
              <div className="grid w-full grid-cols-2 gap-6">
                {dataPie.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-xl bg-muted/30 p-4"
                  >
                    <div>
                      <div className="mb-1 flex items-center gap-2">
                        <div
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <span className="text-xs font-semibold text-muted-foreground uppercase">
                          {item.name}
                        </span>
                      </div>
                      <p className="text-2xl font-bold">{item.value}</p>
                    </div>
                    {item.name === 'DOCUMENTS' && <FileText className="h-8 w-8 text-blue-300" />}
                    {item.name === 'IMAGES' && <FileImage className="h-8 w-8 text-green-300" />}
                    {item.name === 'VIDEOS' && <FileVideo className="h-8 w-8 text-amber-300" />}
                    {item.name === 'OTHERS' && <FileArchive className="h-8 w-8 text-red-300" />}
                  </div>
                ))}
              </div>
              <div className="h-[140px] w-[140px] shrink-0">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={dataPie}
                      innerRadius={50}
                      outerRadius={70}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {dataPie.map((entry, index) => (
                        // eslint-disable-next-line @typescript-eslint/no-deprecated
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Important Unread Alert */}
      <div className="flex items-center justify-between rounded-xl border border-red-100 bg-red-50 p-4">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-red-100 p-2 text-red-600">
            <ShieldAlert className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-semibold text-red-900">Updated Cybersecurity Protocols v2.4</h4>
            <p className="text-sm text-red-700">
              Action Required: Digital signature required by end of week.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm font-medium text-red-600">
          <span>2h ago</span>
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>

      {/* Latest Published */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-bold">Latest Published</h3>
          <Button variant="link" className="text-blue-600">
            View All Documents
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {latestPublished.map((doc) => (
            <Card key={doc.id} className="transition-shadow hover:shadow-md">
              <CardContent className="p-6">
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
                    <BookOpen className="h-5 w-5 text-slate-500" />
                  </div>
                  <Badge variant={getBadgeVariant(doc.type)}>{doc.type}</Badge>
                </div>
                <h4 className="mb-2 font-bold">{doc.title}</h4>
                <p className="mb-6 line-clamp-2 text-sm text-muted-foreground">{doc.description}</p>
                <div className="flex items-center justify-between border-t pt-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-slate-200"></div>
                    <span>{doc.creator}</span>
                  </div>
                  <span>{doc.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recently Interacted */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="flex items-center gap-2 text-lg font-bold">
            <Settings className="h-5 w-5 text-blue-600" /> Recently Interacted
          </h3>
          <Button variant="link" className="text-blue-600">
            View History
          </Button>
        </div>
        <div className="hide-scrollbar flex gap-4 overflow-x-auto pb-4">
          {recentlyInteracted.map((doc) => (
            <Card key={doc.id} className="min-w-[280px] shrink-0">
              <CardContent className="p-5">
                <div className="mb-4 flex items-start justify-between">
                  <div className={`rounded-lg p-2 ${getDocTypeClass(doc.type)}`}>
                    {doc.type === 'WORD' && <FileText className="h-6 w-6" />}
                    {doc.type === 'EXCEL' && <FileSpreadsheet className="h-6 w-6" />}
                    {doc.type === 'PDF' && <FileText className="h-6 w-6" />}
                    {doc.type === 'IMAGE' && <FileImage className="h-6 w-6" />}
                    {doc.type === 'VIDEO' && <FileVideo className="h-6 w-6" />}
                  </div>
                  <Badge variant="outline" className="text-[10px] uppercase">
                    {doc.type}
                  </Badge>
                </div>
                <h4 className="mb-2 text-sm font-semibold">{doc.title}</h4>
                <p className="mb-4 line-clamp-2 text-xs text-muted-foreground">{doc.description}</p>
                <p className="text-[10px] text-muted-foreground">Edited {doc.edited}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Access */}
      <div>
        <h3 className="mb-4 text-lg font-bold">Quick Access</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card className="cursor-pointer transition-colors hover:border-primary">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-50 text-purple-600">
                <BookOpen className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold">Published</h4>
                <p className="text-xs text-muted-foreground">Public Institutional records</p>
              </div>
            </CardContent>
          </Card>
          <Card className="cursor-pointer transition-colors hover:border-primary">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-50 text-purple-600">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold">My Documents</h4>
                <p className="text-xs text-muted-foreground">Personal draft documents</p>
              </div>
            </CardContent>
          </Card>
          <Card className="cursor-pointer transition-colors hover:border-primary">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-50 text-purple-600">
                <UploadCloud className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold">Upload New</h4>
                <p className="text-xs text-muted-foreground">Submit for control approval</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
