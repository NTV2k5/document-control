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
  Pencil,
  Download,
  Move,
  Share2,
  Trash2,
} from 'lucide-react';
import { useState, useEffect } from 'react';
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
import {
  universityDepartments,
  universityProjects,
  hubSummaryCards,
  recentActivity,
} from '@/utils/mockData';

const renderIcon = (icon: string) => {
  switch (icon) {
    case 'image': {
      return <ImageIcon className="h-6 w-6" />;
    }
    case 'video': {
      return <Video className="h-6 w-6" />;
    }
    case 'document': {
      return <FileText className="h-6 w-6" />;
    }
    case 'archive': {
      return <Archive className="h-6 w-6" />;
    }
    default: {
      return <FileText className="h-6 w-6" />;
    }
  }
};

export default function UniversityHubs() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const closeMenu = () => {
      setActiveMenu(null);
    };
    document.addEventListener('click', closeMenu);
    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, []);

  const handleMenuClick = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setActiveMenu(activeMenu === id ? null : id);
  };

  return (
    <div className="space-y-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">University Hub</h2>
        <Button variant="outline" className="flex cursor-pointer items-center gap-2">
          <Filter className="h-4 w-4" /> Filter
        </Button>
      </div>

      {/* Hub Summary Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        {hubSummaryCards.map((card) => (
          <Card key={card.id}>
            <CardContent className="p-6">
              <div className="mb-4 flex items-start justify-between">
                <div className={`rounded-xl bg-${card.color}-50 p-3 text-${card.color}-500`}>
                  {renderIcon(card.icon)}
                </div>
                <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  {card.type}
                </span>
              </div>
              <h3 className="mb-1 text-2xl font-bold">{card.count} Items</h3>
              <p className="text-xs text-muted-foreground">{card.size} used</p>
              <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className={`h-full bg-${card.color}-500`}
                  style={{ width: `${card.percentage}%` }}
                ></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Departments */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="flex items-center gap-2 text-lg font-bold">
            <span className="text-blue-600">🏛</span> Departments
          </h3>
          <Button variant="link" className="cursor-pointer font-medium text-blue-600">
            View Directory
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
          {universityDepartments.map((dept, i) => (
            <Card
              key={`dept-${i}`}
              className={`group cursor-pointer transition-colors hover:border-primary ${activeMenu === `dept-${i}` ? 'relative z-50' : ''}`}
            >
              <CardContent className="relative p-5">
                <div className="mb-4 flex items-start justify-between">
                  <div className={`rounded-xl p-3 bg-${dept.color}-50 text-${dept.color}-500`}>
                    {dept.icon === 'terminal' && <Terminal className="h-5 w-5" />}
                    {dept.icon === 'palette' && <Palette className="h-5 w-5" />}
                    {dept.icon === 'flask' && <FlaskConical className="h-5 w-5" />}
                    {dept.icon === 'sigma' && <Sigma className="h-5 w-5" />}
                  </div>
                  <button
                    onClick={(e) => {
                      handleMenuClick(e, `dept-${i}`);
                    }}
                    className="cursor-pointer rounded-md p-1 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 hover:bg-muted"
                  >
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </div>
                <h4 className="mb-1 text-sm font-semibold">{dept.name}</h4>
                <p className="text-xs text-muted-foreground">
                  {dept.size} • {dept.files} files
                </p>

                {/* Dropdown Menu */}
                {activeMenu === `dept-${i}` && (
                  <div className="absolute top-12 right-0 z-10 w-48 rounded-xl border bg-white py-1 text-sm shadow-lg">
                    <button className="flex w-full cursor-pointer items-center gap-3 px-4 py-2 text-left text-slate-700 hover:bg-muted">
                      <Pencil className="h-4 w-4 text-slate-500" /> Rename
                    </button>
                    <button className="flex w-full cursor-pointer items-center gap-3 px-4 py-2 text-left text-slate-700 hover:bg-muted">
                      <Download className="h-4 w-4 text-slate-500" /> Download
                    </button>
                    <button className="flex w-full cursor-pointer items-center gap-3 px-4 py-2 text-left text-slate-700 hover:bg-muted">
                      <Move className="h-4 w-4 text-slate-500" /> Move
                    </button>
                    <button className="flex w-full cursor-pointer items-center gap-3 px-4 py-2 text-left text-slate-700 hover:bg-muted">
                      <Share2 className="h-4 w-4 text-slate-500" /> Share
                    </button>
                    <div className="my-1 h-px bg-border"></div>
                    <button className="flex w-full cursor-pointer items-center gap-3 px-4 py-2 text-left text-red-600 hover:bg-muted">
                      <Trash2 className="h-4 w-4" /> Delete
                    </button>
                  </div>
                )}
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
          <Button variant="link" className="cursor-pointer font-medium text-blue-600">
            View All Projects
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
          {universityProjects.map((project, i) => (
            <Card
              key={`proj-${i}`}
              className={`group cursor-pointer transition-colors hover:border-primary ${activeMenu === `proj-${i}` ? 'relative z-50' : ''}`}
            >
              <CardContent className="relative p-5">
                <div className="mb-4 flex items-start justify-between">
                  <div
                    className={`rounded-xl p-3 bg-${project.color}-50 text-${project.color}-500`}
                  >
                    {project.icon === 'brain' && <Brain className="h-5 w-5" />}
                    {project.icon === 'leaf' && <Leaf className="h-5 w-5" />}
                    {project.icon === 'rocket' && <Rocket className="h-5 w-5" />}
                    {project.icon === 'archive' && <Archive className="h-5 w-5" />}
                  </div>
                  <button
                    onClick={(e) => {
                      handleMenuClick(e, `proj-${i}`);
                    }}
                    className="cursor-pointer rounded-md p-1 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 hover:bg-muted"
                  >
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </div>
                <h4 className="mb-1 text-sm font-semibold">{project.name}</h4>
                <p className="text-xs text-muted-foreground">
                  {project.size} • {project.members} partners
                </p>

                {/* Dropdown Menu */}
                {activeMenu === `proj-${i}` && (
                  <div className="absolute top-12 right-0 z-10 w-48 rounded-xl border bg-white py-1 text-sm shadow-lg">
                    <button className="flex w-full cursor-pointer items-center gap-3 px-4 py-2 text-left text-slate-700 hover:bg-muted">
                      <Pencil className="h-4 w-4 text-slate-500" /> Rename
                    </button>
                    <button className="flex w-full cursor-pointer items-center gap-3 px-4 py-2 text-left text-slate-700 hover:bg-muted">
                      <Download className="h-4 w-4 text-slate-500" /> Download
                    </button>
                    <button className="flex w-full cursor-pointer items-center gap-3 px-4 py-2 text-left text-slate-700 hover:bg-muted">
                      <Move className="h-4 w-4 text-slate-500" /> Move
                    </button>
                    <button className="flex w-full cursor-pointer items-center gap-3 px-4 py-2 text-left text-slate-700 hover:bg-muted">
                      <Share2 className="h-4 w-4 text-slate-500" /> Share
                    </button>
                    <div className="my-1 h-px bg-border"></div>
                    <button className="flex w-full cursor-pointer items-center gap-3 px-4 py-2 text-left text-red-600 hover:bg-muted">
                      <Trash2 className="h-4 w-4" /> Delete
                    </button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Activity Table */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-bold">Recent Activity</h3>
          <Button variant="link" className="cursor-pointer font-medium text-blue-600">
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
              {recentActivity.map((activity) => (
                <TableRow key={activity.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <FileText className={`h-5 w-5 text-${activity.color}-500`} />
                      <span className="text-sm font-medium">{activity.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground">
                    {activity.modified}
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground">
                    {activity.directory}
                  </TableCell>
                  <TableCell>
                    <div className="flex -space-x-2">
                      {activity.owners.map((owner) => (
                        <div
                          key={owner.id}
                          className={`flex h-6 w-6 items-center justify-center rounded-full border border-white bg-${owner.color}-100 text-[10px] ${owner.text ? `text-${owner.text}-600 font-bold` : ''}`}
                        >
                          {owner.label}
                        </div>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <button className="ml-auto flex cursor-pointer items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-muted">
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
