'use client';

import { Camera, Mail, Phone, MapPin, Building, Info, Clock, Key } from 'lucide-react';
import Image from 'next/image';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  profileInfoMock,
  storageDataMock as storageData,
  recentActivityLogs,
} from '@/utils/mockData';

export default function UserProfile() {
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div className="mb-6 flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Dashboard &gt;</span>
        <span className="text-sm font-semibold">Account Settings</span>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left Column - Profile Info */}
        <div className="space-y-6 lg:col-span-2">
          {/* Header Card */}
          <Card>
            <CardContent className="flex flex-col items-start gap-6 p-6 md:flex-row md:items-center">
              <div className="relative">
                <Image
                  src={profileInfoMock.avatar}
                  alt="Profile"
                  width={96}
                  height={96}
                  unoptimized
                  className="h-24 w-24 rounded-2xl object-cover shadow-sm"
                />
                <button className="absolute -right-2 -bottom-2 rounded-lg bg-blue-600 p-1.5 text-white shadow-md hover:bg-blue-700">
                  <Camera className="h-4 w-4" />
                </button>
              </div>

              <div className="w-full flex-1">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">{profileInfoMock.name}</h2>
                    <p className="text-muted-foreground">{profileInfoMock.role}</p>
                  </div>
                  <Badge
                    variant="success"
                    className="bg-green-100 px-3 text-green-700 hover:bg-green-100"
                  >
                    <span className="mr-2 h-2 w-2 rounded-full bg-green-500"></span>{' '}
                    {profileInfoMock.status}
                  </Badge>
                </div>

                <div className="grid grid-cols-1 gap-4 text-sm text-muted-foreground md:grid-cols-2">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-blue-600" />
                    <span>{profileInfoMock.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-blue-600" />
                    <span>{profileInfoMock.department}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-blue-600" />
                    <span>{profileInfoMock.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-blue-600" />
                    <span>{profileInfoMock.location}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Personal Information Form */}
          <Card>
            <CardContent className="p-6">
              <div className="mb-6 border-b pb-2">
                <h3 className="-mb-[2px] inline-block border-b-2 border-blue-600 pb-2 font-semibold text-blue-600">
                  Personal Information
                </h3>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="first-name"
                      className="text-xs font-semibold text-muted-foreground uppercase"
                    >
                      First Name
                    </label>
                    <Input id="first-name" defaultValue="Sarah" className="bg-muted/30" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="last-name"
                      className="text-xs font-semibold text-muted-foreground uppercase"
                    >
                      Last Name
                    </label>
                    <Input id="last-name" defaultValue="Jenkins" className="bg-muted/30" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="employee-id"
                      className="text-xs font-semibold text-muted-foreground uppercase"
                    >
                      Employee ID
                    </label>
                    <Input id="employee-id" defaultValue="EMP-2025-0982" className="bg-muted/30" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="department"
                      className="text-xs font-semibold text-muted-foreground uppercase"
                    >
                      Department
                    </label>
                    <select
                      id="department"
                      className="flex h-10 w-full rounded-md border border-input bg-muted/30 px-3 py-2 text-sm ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
                    >
                      <option>Information Management</option>
                      <option>Computer Science</option>
                      <option>Mathematics</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="bio"
                    className="text-xs font-semibold text-muted-foreground uppercase"
                  >
                    Professional Bio
                  </label>
                  <textarea
                    id="bio"
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-muted/30 px-3 py-2 text-sm ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
                    defaultValue={profileInfoMock.bio}
                  />
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Analytics & Activity */}
        <div className="space-y-6">
          {/* Storage Analytics */}
          <Card>
            <CardContent className="p-6">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-semibold">Storage Analytics</h3>
                <Info className="h-4 w-4 text-muted-foreground" />
              </div>

              <div className="relative mb-6 flex justify-center">
                <div className="h-40 w-40">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={storageData}
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={0}
                        dataKey="value"
                        startAngle={90}
                        endAngle={-270}
                      >
                        {storageData.map((entry, index) => (
                          // eslint-disable-next-line @typescript-eslint/no-deprecated
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">42%</span>
                  <span className="text-xs font-semibold text-muted-foreground">USED</span>
                </div>
              </div>

              <div className="space-y-3">
                {storageData.map((data, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg bg-muted/30 p-3"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`rounded-md p-2 ${index === 0 ? 'bg-blue-100' : 'bg-slate-100'}`}
                      >
                        <Clock
                          className={`h-4 w-4 ${index === 0 ? 'text-blue-600' : 'text-slate-600'}`}
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{data.name}</p>
                        <p className="text-xs text-muted-foreground">{data.size}</p>
                      </div>
                    </div>
                    <span className="text-sm font-semibold">{data.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-6 font-semibold">Recent Activity</h3>
              <div className="space-y-6">
                {recentActivityLogs.map((log, index) => (
                  <div key={log.id} className="relative flex gap-4">
                    {index !== recentActivityLogs.length - 1 && (
                      <div className="absolute top-6 bottom-[-24px] left-2 w-[2px] bg-border"></div>
                    )}
                    <div
                      className={`z-10 mt-1 h-4 w-4 shrink-0 rounded-full ${log.color} ring-4 ring-white`}
                    ></div>
                    <div>
                      <p className="text-sm font-semibold">{log.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {log.time} • {log.category}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Button variant="link" className="font-semibold text-blue-600">
                  View All Logs
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Change Password */}
          <Card className="group cursor-pointer transition-colors hover:border-primary">
            <CardContent className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-muted p-2 transition-colors group-hover:bg-blue-50">
                  <Key className="h-5 w-5 text-muted-foreground group-hover:text-blue-600" />
                </div>
                <span className="text-sm font-semibold">Change Password</span>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                &gt;
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
