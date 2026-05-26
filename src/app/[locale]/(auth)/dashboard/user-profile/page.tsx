"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  PieChart, Pie, Cell, ResponsiveContainer
} from "recharts";
import { 
  Camera, Mail, Phone, MapPin, Building, Info, CheckCircle2, AlertCircle, Clock, Key
} from "lucide-react";

const storageData = [
  { name: 'Documents', value: 65, color: '#3b82f6' },
  { name: 'Media Assets', value: 35, color: '#e2e8f0' },
];

export default function UserProfile() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-sm text-muted-foreground">Dashboard &gt;</span>
        <span className="text-sm font-semibold">Account Settings</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Profile Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Header Card */}
          <Card>
            <CardContent className="p-6 flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="relative">
                <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="Profile" className="w-24 h-24 rounded-2xl object-cover shadow-sm" />
                <button className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-1.5 rounded-lg shadow-md hover:bg-blue-700">
                  <Camera className="w-4 h-4" />
                </button>
              </div>
              
              <div className="flex-1 w-full">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold">Dr. Sarah Jenkins</h2>
                    <p className="text-muted-foreground">Dean of Information Systems</p>
                  </div>
                  <Badge variant="success" className="bg-green-100 text-green-700 hover:bg-green-100 px-3">
                    <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span> Active
                  </Badge>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-600" />
                    <span>tam.nguyen@giadinh.edu.vn</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-blue-600" />
                    <span>Information Management Dept.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-600" />
                    <span>+84 982 727 272</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span>Main Campus, Building A</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Personal Information Form */}
          <Card>
            <CardContent className="p-6">
              <div className="border-b mb-6 pb-2">
                <h3 className="font-semibold text-blue-600 inline-block border-b-2 border-blue-600 pb-2 -mb-[2px]">Personal Information</h3>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-muted-foreground uppercase">First Name</label>
                    <Input defaultValue="Sarah" className="bg-muted/30" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-muted-foreground uppercase">Last Name</label>
                    <Input defaultValue="Jenkins" className="bg-muted/30" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-muted-foreground uppercase">Employee ID</label>
                    <Input defaultValue="EMP-2025-0982" className="bg-muted/30" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-muted-foreground uppercase">Department</label>
                    <select className="flex h-10 w-full rounded-md border border-input bg-muted/30 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                      <option>Information Management</option>
                      <option>Computer Science</option>
                      <option>Mathematics</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-muted-foreground uppercase">Professional Bio</label>
                  <textarea 
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-muted/30 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    defaultValue="Seasoned Dean with over 15 years of experience in higher education data governance and information systems management. Leading the digital transformation initiative at University Central."
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
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold">Storage Analytics</h3>
                <Info className="w-4 h-4 text-muted-foreground" />
              </div>
              
              <div className="flex justify-center mb-6 relative">
                <div className="w-40 h-40">
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
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-2xl font-bold text-blue-600">42%</span>
                  <span className="text-xs text-muted-foreground font-semibold">USED</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 rounded-lg bg-muted/30">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-md">
                      <Clock className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Documents</p>
                      <p className="text-xs text-muted-foreground">2.8 TB</p>
                    </div>
                  </div>
                  <span className="text-sm font-semibold">65%</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-muted/30">
                  <div className="flex items-center gap-3">
                    <div className="bg-slate-100 p-2 rounded-md">
                      <Clock className="w-4 h-4 text-slate-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Media Assets</p>
                      <p className="text-xs text-muted-foreground">1.4 TB</p>
                    </div>
                  </div>
                  <span className="text-sm font-semibold">35%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-6">Recent Activity</h3>
              <div className="space-y-6">
                <div className="flex gap-4 relative">
                  <div className="absolute left-2 top-6 bottom-[-24px] w-[2px] bg-border"></div>
                  <div className="w-4 h-4 rounded-full bg-blue-600 ring-4 ring-white z-10 shrink-0 mt-1"></div>
                  <div>
                    <p className="text-sm font-semibold">Updated "Enrollment_Form_V2"</p>
                    <p className="text-xs text-muted-foreground">2 hours ago • Document</p>
                  </div>
                </div>
                <div className="flex gap-4 relative">
                  <div className="absolute left-2 top-6 bottom-[-24px] w-[2px] bg-border"></div>
                  <div className="w-4 h-4 rounded-full bg-green-500 ring-4 ring-white z-10 shrink-0 mt-1"></div>
                  <div>
                    <p className="text-sm font-semibold">Login from New Device</p>
                    <p className="text-xs text-muted-foreground">Yesterday at 10:45 AM • Security</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-4 h-4 rounded-full bg-yellow-500 ring-4 ring-white z-10 shrink-0 mt-1"></div>
                  <div>
                    <p className="text-sm font-semibold">Password Changed</p>
                    <p className="text-xs text-muted-foreground">Oct 24, 2025 • Security</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <Button variant="link" className="text-blue-600 font-semibold">View All Logs</Button>
              </div>
            </CardContent>
          </Card>

          {/* Change Password */}
          <Card className="hover:border-primary cursor-pointer transition-colors group">
            <CardContent className="p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="bg-muted p-2 rounded-lg group-hover:bg-blue-50 transition-colors">
                  <Key className="w-5 h-5 text-muted-foreground group-hover:text-blue-600" />
                </div>
                <span className="font-semibold text-sm">Change Password</span>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">&gt;</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
