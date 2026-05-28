import {
  MoreVertical,
  Brain,
  Leaf,
  Rocket,
  Archive,
  Pencil,
  Download,
  Move,
  Share2,
  Trash2,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type HubActiveProjectsProps = {
  projects: any[];
}

export function HubActiveProjects({ projects }: HubActiveProjectsProps) {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-lg font-bold">
          <span className="text-blue-600">⚛</span> Active Projects
        </h3>
        <button className="text-sm font-bold text-blue-600 hover:underline">
          View All Projects
        </button>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-5">
        {projects.map((project, i) => (
          <Card
            key={`proj-${i}`}
            className="group cursor-pointer rounded-2xl border-none shadow-sm ring-1 ring-slate-100 transition-all hover:-translate-y-1 hover:shadow-md hover:ring-slate-200"
          >
            <CardContent className="p-5">
              <div className="mb-5 flex items-start justify-between">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl bg-${project.color}-50 text-${project.color}-500 shadow-sm`}
                >
                  {project.icon === 'brain' && <Brain className="h-6 w-6" strokeWidth={2.5} />}
                  {project.icon === 'leaf' && <Leaf className="h-6 w-6" strokeWidth={2.5} />}
                  {project.icon === 'rocket' && <Rocket className="h-6 w-6" strokeWidth={2.5} />}
                  {project.icon === 'archive' && <Archive className="h-6 w-6" strokeWidth={2.5} />}
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="cursor-pointer rounded-full p-1.5 text-slate-400 opacity-0 transition-all group-hover:opacity-100 hover:bg-slate-100 hover:text-slate-600">
                      <MoreVertical className="h-5 w-5" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="w-48 rounded-xl border border-slate-100 shadow-lg"
                  >
                    <DropdownMenuItem className="cursor-pointer py-2 text-sm font-medium text-slate-700">
                      <Pencil className="mr-2 h-4 w-4 text-slate-400" /> Rename Project
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer py-2 text-sm font-medium text-slate-700">
                      <Download className="mr-2 h-4 w-4 text-slate-400" /> Download All
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer py-2 text-sm font-medium text-slate-700">
                      <Move className="mr-2 h-4 w-4 text-slate-400" /> Move Directory
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer py-2 text-sm font-medium text-slate-700">
                      <Share2 className="mr-2 h-4 w-4 text-slate-400" /> Share Access
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-slate-100" />
                    <DropdownMenuItem className="cursor-pointer py-2 text-sm font-bold text-red-600 focus:bg-red-50 focus:text-red-700">
                      <Trash2 className="mr-2 h-4 w-4" /> Archive Project
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <h4 className="mb-1 text-sm font-bold text-slate-900">{project.name}</h4>
              <p className="text-xs font-medium text-slate-500">
                {project.size} • {project.members} partners
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
