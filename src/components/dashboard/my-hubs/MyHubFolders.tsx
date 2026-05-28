import {
  Folder,
  FileText,
  Pencil,
  Download,
  Move,
  Share2,
  Trash2,
  MoreVertical,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { myHubFolders } from '@/utils/mockData';

export function MyHubFolders() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
      {myHubFolders.map((folder, i) => (
        <Card
          key={i}
          className="relative cursor-pointer overflow-visible transition-colors hover:border-primary"
        >
          <CardContent className="p-4">
            <div className="mb-4 flex items-start justify-between">
              {folder.isPdf ? (
                <div className="rounded-lg bg-red-50 p-2 text-red-500">
                  <FileText className="h-6 w-6" />
                </div>
              ) : (
                <div className="rounded-lg bg-blue-50 p-2 text-blue-500">
                  <Folder className="h-6 w-6 fill-current" />
                </div>
              )}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className="rounded-md p-1 text-muted-foreground hover:bg-muted focus:outline-none"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48 rounded-xl p-1 shadow-xl">
                  <DropdownMenuItem className="cursor-pointer gap-3 p-2 font-medium text-slate-700 focus:bg-muted">
                    <Pencil className="h-4 w-4 text-muted-foreground" /> Rename
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer gap-3 p-2 font-medium text-slate-700 focus:bg-muted">
                    <Download className="h-4 w-4 text-muted-foreground" /> Download
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer gap-3 p-2 font-medium text-slate-700 focus:bg-muted">
                    <Move className="h-4 w-4 text-muted-foreground" /> Move
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer gap-3 p-2 font-medium text-slate-700 focus:bg-muted">
                    <Share2 className="h-4 w-4 text-muted-foreground" /> Share
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer gap-3 p-2 font-medium text-red-600 focus:bg-red-50 focus:text-red-700">
                    <Trash2 className="h-4 w-4" /> Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <h4 className="mb-1 truncate text-sm font-semibold" title={folder.name}>
              {folder.name}
            </h4>
            {!folder.isPdf && (
              <p className="text-xs text-muted-foreground">
                {folder.size} • {folder.files} files
              </p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
