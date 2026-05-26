"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from "recharts";
import { 
  FileText, ShieldAlert, ArrowRight, BookOpen, 
  Settings, Bot, FileSpreadsheet, FileImage, 
  FileVideo, FileArchive, UploadCloud 
} from "lucide-react";
import { latestPublished, recentlyInteracted } from "@/utils/mockData";

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

export default function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Trending Tags */}
      <div className="flex items-center gap-2 mb-6">
        <span className="text-sm text-muted-foreground mr-2">TRENDING</span>
        <Badge variant="trending">#AIEthics</Badge>
        <Badge variant="trending">#QuantumComputing</Badge>
        <Badge variant="trending">#ModernArchitecture</Badge>
        <Badge variant="trending">#Sustainability</Badge>
        <Badge variant="trending">#Neuroscience</Badge>
        <Badge variant="trending">#DigitalHumanities</Badge>
      </div>

      {/* Hero Banner & Trending Now */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 relative overflow-hidden rounded-2xl bg-slate-900 p-8 text-white min-h-[300px] flex flex-col justify-center">
          <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
          <div className="relative z-10 max-w-lg space-y-4">
            <h1 className="text-4xl font-bold">
              GDU Portal <br /> <span className="text-cyan-400">Document Control</span>
            </h1>
            <p className="text-slate-300">
              Experience a centralized, transparent, and AI-driven ecosystem for university-wide policy management.
            </p>
            <div className="flex gap-4 pt-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8">Get Started</Button>
              <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 rounded-full">
                <Bot className="mr-2 h-4 w-4" /> AI Assist
              </Button>
            </div>
          </div>
        </div>
        
        <Card className="bg-blue-600 text-white border-none rounded-2xl">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4 text-blue-100">TRENDING NOW</h3>
            <div className="space-y-4">
              {[
                { rank: '01', title: 'Exam Preparation: AI Tools Policy', dept: '120 views • Academic Affairs' },
                { rank: '02', title: 'Summer Internship 2024 Portal Open', dept: '200 entries • Career Hub' },
                { rank: '03', title: 'New Student Housing Regulations', dept: '450 views • Housing Office' },
                { rank: '04', title: 'New Student Housing Regulations', dept: '450 views • Housing Office' },
                { rank: '05', title: 'New Student Housing Regulations', dept: '450 views • Housing Office' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="text-blue-300 text-lg font-light">{item.rank}</span>
                  <div>
                    <p className="font-medium text-sm leading-tight">{item.title}</p>
                    <p className="text-xs text-blue-200 mt-1">{item.dept}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 flex justify-between items-center">
            <div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Published Files</p>
              <h4 className="text-3xl font-bold">1,284</h4>
              <p className="text-xs text-green-600 mt-1">↗ +12% this month</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
              <FileText className="h-6 w-6" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex justify-between items-center">
            <div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">My Files</p>
              <h4 className="text-3xl font-bold">452</h4>
              <p className="text-xs text-green-600 mt-1">↗ +5% increase this month</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600">
              <ShieldAlert className="h-6 w-6" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex justify-between items-center">
            <div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Sharing Files</p>
              <h4 className="text-3xl font-bold">50</h4>
              <p className="text-xs text-muted-foreground mt-1">Sharing for 38 emails</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-green-50 flex items-center justify-center text-green-600">
              <Settings className="h-6 w-6" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Analytics Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-semibold text-lg">Engagement Analytics</h3>
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
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#94a3b8'}} />
                  <Tooltip cursor={{fill: '#f1f5f9'}} />
                  <Bar dataKey="views" fill="#cbd5e1" radius={[4, 4, 0, 0]} activeBar={<rect fill="#3b82f6" />} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-1">File Distribution</h3>
            <p className="text-sm text-muted-foreground mb-6">Split by file type</p>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="grid grid-cols-2 gap-6 w-full">
                {dataPie.map((item, i) => (
                  <div key={i} className="flex justify-between items-center bg-muted/30 p-4 rounded-xl">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 rounded-full" style={{backgroundColor: item.color}}></div>
                        <span className="text-xs font-semibold text-muted-foreground uppercase">{item.name}</span>
                      </div>
                      <p className="text-2xl font-bold">{item.value}</p>
                    </div>
                    {item.name === 'DOCUMENTS' && <FileText className="text-blue-300 h-8 w-8" />}
                    {item.name === 'IMAGES' && <FileImage className="text-green-300 h-8 w-8" />}
                    {item.name === 'VIDEOS' && <FileVideo className="text-amber-300 h-8 w-8" />}
                    {item.name === 'OTHERS' && <FileArchive className="text-red-300 h-8 w-8" />}
                  </div>
                ))}
              </div>
              <div className="h-[140px] w-[140px] shrink-0">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={dataPie} innerRadius={50} outerRadius={70} paddingAngle={2} dataKey="value">
                      {dataPie.map((entry, index) => (
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
      <div className="bg-red-50 border border-red-100 rounded-xl p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-red-100 p-2 rounded-full text-red-600">
            <ShieldAlert className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-semibold text-red-900">Updated Cybersecurity Protocols v2.4</h4>
            <p className="text-sm text-red-700">Action Required: Digital signature required by end of week.</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-red-600 font-medium">
          <span>2h ago</span>
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>

      {/* Latest Published */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg">Latest Published</h3>
          <Button variant="link" className="text-blue-600">View All Documents</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestPublished.map((doc) => (
            <Card key={doc.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-slate-500" />
                  </div>
                  <Badge variant={doc.type === 'REGULATION' ? 'default' : doc.type === 'POLICY' ? 'success' : 'warning'}>
                    {doc.type}
                  </Badge>
                </div>
                <h4 className="font-bold mb-2">{doc.title}</h4>
                <p className="text-sm text-muted-foreground mb-6 line-clamp-2">{doc.description}</p>
                <div className="flex justify-between items-center text-xs text-muted-foreground pt-4 border-t">
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
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg flex items-center gap-2">
            <Settings className="h-5 w-5 text-blue-600" /> Recently Interacted
          </h3>
          <Button variant="link" className="text-blue-600">View History</Button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
          {recentlyInteracted.map((doc) => (
            <Card key={doc.id} className="min-w-[280px] shrink-0">
              <CardContent className="p-5">
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-2 rounded-lg ${
                    doc.type === 'WORD' ? 'bg-blue-50 text-blue-600' :
                    doc.type === 'EXCEL' ? 'bg-green-50 text-green-600' :
                    doc.type === 'PDF' ? 'bg-red-50 text-red-600' :
                    doc.type === 'IMAGE' ? 'bg-amber-50 text-amber-600' :
                    'bg-purple-50 text-purple-600'
                  }`}>
                    {doc.type === 'WORD' && <FileText className="h-6 w-6" />}
                    {doc.type === 'EXCEL' && <FileSpreadsheet className="h-6 w-6" />}
                    {doc.type === 'PDF' && <FileText className="h-6 w-6" />}
                    {doc.type === 'IMAGE' && <FileImage className="h-6 w-6" />}
                    {doc.type === 'VIDEO' && <FileVideo className="h-6 w-6" />}
                  </div>
                  <Badge variant="outline" className="text-[10px] uppercase">{doc.type}</Badge>
                </div>
                <h4 className="font-semibold text-sm mb-2">{doc.title}</h4>
                <p className="text-xs text-muted-foreground mb-4 line-clamp-2">{doc.description}</p>
                <p className="text-[10px] text-muted-foreground">Edited {doc.edited}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Access */}
      <div>
        <h3 className="font-bold text-lg mb-4">Quick Access</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:border-primary cursor-pointer transition-colors">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                <BookOpen className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold">Published</h4>
                <p className="text-xs text-muted-foreground">Public Institutional records</p>
              </div>
            </CardContent>
          </Card>
          <Card className="hover:border-primary cursor-pointer transition-colors">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold">My Documents</h4>
                <p className="text-xs text-muted-foreground">Personal draft documents</p>
              </div>
            </CardContent>
          </Card>
          <Card className="hover:border-primary cursor-pointer transition-colors">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
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
