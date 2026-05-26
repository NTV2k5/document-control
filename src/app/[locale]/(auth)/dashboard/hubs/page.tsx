"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Filter, MoreVertical, Image as ImageIcon, Video, FileText, 
  Archive, Terminal, Palette, FlaskConical, Sigma,
  Brain, Leaf, Rocket
} from "lucide-react";
import { universityDepartments, universityProjects } from "@/utils/mockData";

export default function UniversityHubs() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">University Hub</h2>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="w-4 h-4" /> Filter
        </Button>
      </div>

      {/* Hub Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-red-50 text-red-500 rounded-xl">
                <ImageIcon className="w-6 h-6" />
              </div>
              <span className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">Images</span>
            </div>
            <h3 className="text-2xl font-bold mb-1">543 Items</h3>
            <p className="text-xs text-muted-foreground">2.89 GB used</p>
            <div className="mt-4 h-1.5 w-full bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-red-500 w-[20%]"></div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-blue-50 text-blue-500 rounded-xl">
                <Video className="w-6 h-6" />
              </div>
              <span className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">Videos</span>
            </div>
            <h3 className="text-2xl font-bold mb-1">2 Items</h3>
            <p className="text-xs text-muted-foreground">333.79 MB used</p>
            <div className="mt-4 h-1.5 w-full bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 w-[5%]"></div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-green-50 text-green-500 rounded-xl">
                <FileText className="w-6 h-6" />
              </div>
              <span className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">Documents</span>
            </div>
            <h3 className="text-2xl font-bold mb-1">1235 Items</h3>
            <p className="text-xs text-muted-foreground">8.85 GB used</p>
            <div className="mt-4 h-1.5 w-full bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-green-500 w-[60%]"></div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-amber-50 text-amber-500 rounded-xl">
                <Archive className="w-6 h-6" />
              </div>
              <span className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">Other</span>
            </div>
            <h3 className="text-2xl font-bold mb-1">226 Items</h3>
            <p className="text-xs text-muted-foreground">30.77 GB used</p>
            <div className="mt-4 h-1.5 w-full bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-amber-500 w-[15%]"></div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Departments */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold flex items-center gap-2">
            <span className="text-blue-600">🏛</span> Departments
          </h3>
          <Button variant="link" className="text-blue-600 font-medium">View Directory</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {universityDepartments.map((dept, i) => (
            <Card key={i} className="hover:border-primary transition-colors group cursor-pointer">
              <CardContent className="p-5 relative">
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-xl bg-${dept.color}-50 text-${dept.color}-500`}>
                    {dept.icon === 'terminal' && <Terminal className="w-5 h-5 text-blue-500" />}
                    {dept.icon === 'palette' && <Palette className="w-5 h-5 text-red-500" />}
                    {dept.icon === 'flask' && <FlaskConical className="w-5 h-5 text-green-500" />}
                    {dept.icon === 'sigma' && <Sigma className="w-5 h-5 text-amber-500" />}
                  </div>
                  <button className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
                <h4 className="font-semibold text-sm mb-1">{dept.name}</h4>
                <p className="text-xs text-muted-foreground">{dept.size} • {dept.files} files</p>
                
                {/* Simulated Hover Context Menu on the first item */}
                {i === 3 && (
                  <div className="absolute right-0 top-12 w-48 bg-white border shadow-lg rounded-xl z-10 py-1 text-sm">
                    <button className="w-full text-left px-4 py-2 hover:bg-muted flex items-center gap-2 text-slate-700"><span className="text-xs">✏️</span> Rename Dept</button>
                    <button className="w-full text-left px-4 py-2 hover:bg-muted flex items-center gap-2 text-slate-700"><span className="text-xs">📥</span> Download All</button>
                    <button className="w-full text-left px-4 py-2 hover:bg-muted flex items-center gap-2 text-slate-700"><span className="text-xs">📁</span> Move Directory</button>
                    <button className="w-full text-left px-4 py-2 hover:bg-muted flex items-center gap-2 text-slate-700"><span className="text-xs">🔗</span> Share Access</button>
                    <div className="h-px bg-border my-1"></div>
                    <button className="w-full text-left px-4 py-2 hover:bg-muted flex items-center gap-2 text-red-600"><span className="text-xs">🗑️</span> Archive Dept</button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Active Projects */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold flex items-center gap-2">
            <span className="text-blue-600">⚛</span> Active Projects
          </h3>
          <Button variant="link" className="text-blue-600 font-medium">View All Projects</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {universityProjects.map((project, i) => (
            <Card key={i} className="hover:border-primary transition-colors group cursor-pointer">
              <CardContent className="p-5">
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-xl bg-${project.color}-50 text-${project.color}-500`}>
                    {project.icon === 'brain' && <Brain className="w-5 h-5 text-blue-500" />}
                    {project.icon === 'leaf' && <Leaf className="w-5 h-5 text-green-500" />}
                    {project.icon === 'rocket' && <Rocket className="w-5 h-5 text-purple-500" />}
                    {project.icon === 'archive' && <Archive className="w-5 h-5 text-amber-500" />}
                  </div>
                  <button className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
                <h4 className="font-semibold text-sm mb-1">{project.name}</h4>
                <p className="text-xs text-muted-foreground">{project.size} • {project.members} partners</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Activity Table */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">Recent Activity</h3>
          <Button variant="link" className="text-blue-600 font-medium">View Full Audit Trail</Button>
        </div>
        
        <div className="bg-card rounded-xl border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>NAME</TableHead>
                <TableHead>LAST MODIFIED</TableHead>
                <TableHead>DIRECTORY</TableHead>
                <TableHead>OWNERS</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-green-500" />
                    <span className="font-medium text-sm">Thesis_Proposal_Final.pdf</span>
                  </div>
                </TableCell>
                <TableCell className="text-xs text-muted-foreground">2 hours ago</TableCell>
                <TableCell className="text-xs text-muted-foreground">Computer Science</TableCell>
                <TableCell>
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-[10px] border border-white">C</div>
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-[10px] border border-white">🌿</div>
                  </div>
                </TableCell>
                <TableCell><MoreVertical className="w-4 h-4 text-muted-foreground ml-auto" /></TableCell>
              </TableRow>
              
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-amber-500" />
                    <span className="font-medium text-sm">Lab_Notes_Week_12.docx</span>
                  </div>
                </TableCell>
                <TableCell className="text-xs text-muted-foreground">Yesterday, 14:30</TableCell>
                <TableCell className="text-xs text-muted-foreground">AI Research Lab</TableCell>
                <TableCell>
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[10px] font-bold border border-white">AT</div>
                </TableCell>
                <TableCell><MoreVertical className="w-4 h-4 text-muted-foreground ml-auto" /></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

    </div>
  );
}
