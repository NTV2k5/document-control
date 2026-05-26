'use client';

import {
  Filter,
  MoreVertical,
  Image as ImageIcon,
  Video,
  FileText,
  Archive,
  Terminal,
  Palette,
  FlaskConical,
  Sigma,
  Brain,
  Leaf,
  Rocket,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { universityDepartments, universityProjects } from '@/utils/mockData';

export default function UniversityHubs() {
  return (
    <div className="space-y-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">University Hub</h2>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" /> Filter
        </Button>
      </div>

      {/* Hub Summary Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="mb-4 flex items-start justify-between">
              <div className="rounded-xl bg-red-50 p-3 text-red-500">
                <ImageIcon className="h-6 w-6" />
              </div>
              <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                Images
              </span>
            </div>
            <h3 className="mb-1 text-2xl font-bold">543 Items</h3>
            <p className="text-xs text-muted-foreground">2.89 GB used</p>
            <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <div className="h-full w-[20%] bg-red-500"></div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="mb-4 flex items-start justify-between">
              <div className="rounded-xl bg-blue-50 p-3 text-blue-500">
                <Video className="h-6 w-6" />
              </div>
              <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                Videos
              </span>
            </div>
            <h3 className="mb-1 text-2xl font-bold">2 Items</h3>
            <p className="text-xs text-muted-foreground">333.79 MB used</p>
            <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <div className="h-full w-[5%] bg-blue-500"></div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="mb-4 flex items-start justify-between">
              <div className="rounded-xl bg-green-50 p-3 text-green-500">
                <FileText className="h-6 w-6" />
              </div>
              <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                Documents
              </span>
            </div>
            <h3 className="mb-1 text-2xl font-bold">1235 Items</h3>
            <p className="text-xs text-muted-foreground">8.85 GB used</p>
            <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <div className="h-full w-[60%] bg-green-500"></div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="mb-4 flex items-start justify-between">
              <div className="rounded-xl bg-amber-50 p-3 text-amber-500">
                <Archive className="h-6 w-6" />
              </div>
              <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                Other
              </span>
            </div>
            <h3 className="mb-1 text-2xl font-bold">226 Items</h3>
            <p className="text-xs text-muted-foreground">30.77 GB used</p>
            <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <div className="h-full w-[15%] bg-amber-500"></div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Departments */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="flex items-center gap-2 text-lg font-bold">
            <span className="text-blue-600">🏛</span> Departments
          </h3>
          <Button variant="link" className="font-medium text-blue-600">
            View Directory
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
          {universityDepartments.map((dept, i) => (
            <Card key={i} className="group cursor-pointer transition-colors hover:border-primary">
              <CardContent className="relative p-5">
                <div className="mb-4 flex items-start justify-between">
                  <div className={`rounded-xl p-3 bg-${dept.color}-50 text-${dept.color}-500`}>
                    {dept.icon === 'terminal' && <Terminal className="h-5 w-5 text-blue-500" />}
                    {dept.icon === 'palette' && <Palette className="h-5 w-5 text-red-500" />}
                    {dept.icon === 'flask' && <FlaskConical className="h-5 w-5 text-green-500" />}
                    {dept.icon === 'sigma' && <Sigma className="h-5 w-5 text-amber-500" />}
                  </div>
                  <button className="text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </div>
                <h4 className="mb-1 text-sm font-semibold">{dept.name}</h4>
                <p className="text-xs text-muted-foreground">
                  {dept.size} • {dept.files} files
                </p>

                {/* Hover Context Menu */}
                <div className="pointer-events-none absolute top-12 right-0 z-10 w-48 rounded-xl border bg-white py-1 text-sm opacity-0 shadow-lg transition-opacity group-hover:pointer-events-auto group-hover:opacity-100">
                  <button className="flex w-full items-center gap-2 px-4 py-2 text-left text-slate-700 hover:bg-muted">
                    <span className="text-xs">✏️</span> Rename Dept
                  </button>
                  <button className="flex w-full items-center gap-2 px-4 py-2 text-left text-slate-700 hover:bg-muted">
                    <span className="text-xs">📥</span> Download All
                  </button>
                  <button className="flex w-full items-center gap-2 px-4 py-2 text-left text-slate-700 hover:bg-muted">
                    <span className="text-xs">📁</span> Move Directory
                  </button>
                  <button className="flex w-full items-center gap-2 px-4 py-2 text-left text-slate-700 hover:bg-muted">
                    <span className="text-xs">🔗</span> Share Access
                  </button>
                  <div className="my-1 h-px bg-border"></div>
                  <button className="flex w-full items-center gap-2 px-4 py-2 text-left text-red-600 hover:bg-muted">
                    <span className="text-xs">🗑️</span> Archive Dept
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Active Projects */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="flex items-center gap-2 text-lg font-bold">
            <span className="text-blue-600">⚛</span> Active Projects
          </h3>
          <Button variant="link" className="font-medium text-blue-600">
            View All Projects
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
          {universityProjects.map((project, i) => (
            <Card key={i} className="group cursor-pointer transition-colors hover:border-primary">
              <CardContent className="p-5">
                <div className="mb-4 flex items-start justify-between">
                  <div
                    className={`rounded-xl p-3 bg-${project.color}-50 text-${project.color}-500`}
                  >
                    {project.icon === 'brain' && <Brain className="h-5 w-5 text-blue-500" />}
                    {project.icon === 'leaf' && <Leaf className="h-5 w-5 text-green-500" />}
                    {project.icon === 'rocket' && <Rocket className="h-5 w-5 text-purple-500" />}
                    {project.icon === 'archive' && <Archive className="h-5 w-5 text-amber-500" />}
                  </div>
                  <button className="text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </div>
                <h4 className="mb-1 text-sm font-semibold">{project.name}</h4>
                <p className="text-xs text-muted-foreground">
                  {project.size} • {project.members} partners
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Activity Table */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-bold">Recent Activity</h3>
          <Button variant="link" className="font-medium text-blue-600">
            View Full Audit Trail
          </Button>
        </div>

        <div className="rounded-xl border bg-card">
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
                    <FileText className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium">Thesis_Proposal_Final.pdf</span>
                  </div>
                </TableCell>
                <TableCell className="text-xs text-muted-foreground">2 hours ago</TableCell>
                <TableCell className="text-xs text-muted-foreground">Computer Science</TableCell>
                <TableCell>
                  <div className="flex -space-x-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full border border-white bg-orange-100 text-[10px]">
                      C
                    </div>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full border border-white bg-blue-100 text-[10px]">
                      🌿
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <MoreVertical className="ml-auto h-4 w-4 text-muted-foreground" />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-amber-500" />
                    <span className="text-sm font-medium">Lab_Notes_Week_12.docx</span>
                  </div>
                </TableCell>
                <TableCell className="text-xs text-muted-foreground">Yesterday, 14:30</TableCell>
                <TableCell className="text-xs text-muted-foreground">AI Research Lab</TableCell>
                <TableCell>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full border border-white bg-blue-100 text-[10px] font-bold text-blue-600">
                    AT
                  </div>
                </TableCell>
                <TableCell>
                  <MoreVertical className="ml-auto h-4 w-4 text-muted-foreground" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
