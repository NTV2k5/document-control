'use client';

import {
  Filter,
  MoreVertical,
  Image as ImageIcon,
  Video,
  FileText,
  Archive,
  Folder,
  Pencil,
  Download,
  Move,
  Share2,
  Trash2,
  FolderPlus,
  FilePlus,
} from 'lucide-react';
import { useState } from 'react';
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
import { myHubFolders } from '@/utils/mockData';

export default function MyHubs() {
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);

  const toggleMenu = (index: number) => {
    if (openMenuId === index) {
      setOpenMenuId(null);
    } else {
      setOpenMenuId(index);
    }
  };

  return (
    <div className="space-y-8 pb-10">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">My Hubs</h2>
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

      {/* Folders */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-bold">Folders</h3>
          <div className="flex gap-3">
            <Button className="bg-blue-600 text-xs hover:bg-blue-700">
              <FolderPlus className="mr-2 h-4 w-4" /> Create Folder
            </Button>
            <Button variant="outline" className="text-xs">
              <FilePlus className="mr-2 h-4 w-4" /> Add File
            </Button>
          </div>
        </div>

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
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMenu(i);
                    }}
                    className="rounded-md p-1 text-muted-foreground hover:bg-muted"
                  >
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </div>
                <h4 className="mb-1 truncate text-sm font-semibold" title={folder.name}>
                  {folder.name}
                </h4>
                {!folder.isPdf && (
                  <p className="text-xs text-muted-foreground">
                    {folder.size} • {folder.files} files
                  </p>
                )}

                {/* Context Menu */}
                {openMenuId === i && (
                  <>
                    <button
                      type="button"
                      aria-label="Close menu"
                      className="fixed inset-0 z-40 cursor-default"
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenMenuId(null);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Escape') {
                          setOpenMenuId(null);
                        }
                      }}
                    ></button>
                    <div className="animate-in fade-in zoom-in-95 absolute top-10 right-[-40px] z-50 w-48 rounded-xl border bg-white py-1 text-sm shadow-xl duration-200">
                      <button className="flex w-full items-center gap-3 px-4 py-2 text-left font-medium text-slate-700 hover:bg-muted">
                        <Pencil className="h-4 w-4 text-muted-foreground" /> Rename
                      </button>
                      <button className="flex w-full items-center gap-3 px-4 py-2 text-left font-medium text-slate-700 hover:bg-muted">
                        <Download className="h-4 w-4 text-muted-foreground" /> Download
                      </button>
                      <button className="flex w-full items-center gap-3 px-4 py-2 text-left font-medium text-slate-700 hover:bg-muted">
                        <Move className="h-4 w-4 text-muted-foreground" /> Move
                      </button>
                      <button className="flex w-full items-center gap-3 px-4 py-2 text-left font-medium text-slate-700 hover:bg-muted">
                        <Share2 className="h-4 w-4 text-muted-foreground" /> Share
                      </button>
                      <div className="my-1 h-px bg-border"></div>
                      <button className="flex w-full items-center gap-3 px-4 py-2 text-left font-medium text-red-600 hover:bg-red-50">
                        <Trash2 className="h-4 w-4" /> Delete
                      </button>
                    </div>
                  </>
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
                    <div className="flex h-6 w-6 items-center justify-center rounded-full border border-white bg-orange-100 text-[10px] font-bold text-orange-600">
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
