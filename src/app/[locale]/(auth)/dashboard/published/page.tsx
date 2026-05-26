'use client';

import {
  Download,
  FileText,
  FileSpreadsheet,
  LayoutGrid,
  List,
  MoreHorizontal,
  Maximize2,
  FileCode2,
} from 'lucide-react';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
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
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { publishedDocuments, publishedDocumentsList } from '@/utils/mockData';

export default function PublishedDocuments() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedDocId, setSelectedDocId] = useState<string>('MH-Admin_25-0044');

  return (
    <div className="flex h-[calc(100vh-8rem)] gap-6">
      {/* Main Content Area */}
      <div className="flex flex-1 flex-col">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Published Documents</h2>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Download className="mr-2 h-4 w-4" /> Export Excel
          </Button>
        </div>

        <div className="mb-6 flex items-center justify-between border-b border-border pb-2">
          <Tabs defaultValue="all" className="w-[400px]">
            <TabsList className="border-none">
              <TabsTrigger value="all" active>
                ALL (24)
              </TabsTrigger>
              <TabsTrigger value="academic">ACADEMIC DOCS (12)</TabsTrigger>
              <TabsTrigger value="financial">FINANCIAL (8)</TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="flex items-center gap-2">
            <button
              className={`rounded-md p-2 transition-colors ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-muted-foreground hover:bg-muted'}`}
              onClick={() => {
                setViewMode('grid');
              }}
            >
              <LayoutGrid className="h-5 w-5" />
            </button>
            <button
              className={`rounded-md p-2 transition-colors ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-muted-foreground hover:bg-muted'}`}
              onClick={() => {
                setViewMode('list');
              }}
            >
              <List className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto pr-2 pb-4">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {publishedDocuments.map((doc) => (
                <Card
                  key={doc.id}
                  className={`cursor-pointer transition-all hover:border-blue-300 ${selectedDocId === doc.id ? 'border-blue-500 ring-1 ring-blue-500' : ''}`}
                  onClick={() => {
                    setSelectedDocId(doc.id);
                  }}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-muted/50">
                        {doc.type === 'PDF' && <FileText className="h-8 w-8 text-red-500" />}
                        {doc.type === 'EXCEL' && (
                          <FileSpreadsheet className="h-8 w-8 text-green-500" />
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between">
                          <h4 className="mr-2 truncate text-sm font-semibold">{doc.name}</h4>
                          <button className="text-muted-foreground">
                            <MoreHorizontal className="h-4 w-4" />
                          </button>
                        </div>
                        <Badge variant="success" className="mt-1 mb-3 px-1.5 py-0 text-[10px]">
                          ✓ APPROVED
                        </Badge>

                        <div className="mt-2 flex items-end justify-between">
                          <div className="text-[10px] text-muted-foreground">
                            <p>
                              Created by: <span className="text-blue-600">{doc.creator}</span>
                            </p>
                            <p>Created on: {doc.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="mb-1 text-[10px] text-muted-foreground">RECIPIENTS:</p>
                            <div className="flex -space-x-2">
                              <div className="h-5 w-5 rounded-full border border-white bg-blue-100"></div>
                              <div className="h-5 w-5 rounded-full border border-white bg-green-100"></div>
                              <div className="flex h-5 w-5 items-center justify-center rounded-full border border-white bg-slate-100 text-[8px]">
                                +2
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center justify-between border-t pt-3">
                          <span className="text-[10px] font-medium text-blue-600">
                            {doc.tags[0]}
                          </span>
                          <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                            👁 {doc.views} views
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="rounded-xl border bg-card">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>TYPE</TableHead>
                    <TableHead>DOCUMENT NAME</TableHead>
                    <TableHead>CREATOR</TableHead>
                    <TableHead>DATE</TableHead>
                    <TableHead>VIEWS</TableHead>
                    <TableHead>STATUS</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {publishedDocumentsList.map((doc, idx) => (
                    <TableRow
                      key={doc.id}
                      className={`cursor-pointer ${idx === 0 ? 'bg-blue-50/50' : ''}`}
                      onClick={() => {
                        setSelectedDocId('MH-Admin_25-0044');
                      }}
                    >
                      <TableCell>
                        {doc.type === 'PDF' && <FileText className="h-5 w-5 text-red-500" />}
                        {doc.type === 'EXCEL' && (
                          <FileSpreadsheet className="h-5 w-5 text-green-500" />
                        )}
                        {doc.type === 'WORD' && <FileText className="h-5 w-5 text-blue-500" />}
                      </TableCell>
                      <TableCell className="max-w-[200px] truncate font-medium">
                        {doc.name}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <div className="h-5 w-5 rounded-full bg-slate-200"></div>
                          {doc.creator}
                        </div>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{doc.date}</TableCell>
                      <TableCell className="text-muted-foreground">{doc.views}</TableCell>
                      <TableCell>
                        {doc.status === 'APPROVED' ? (
                          <Badge
                            variant="outline"
                            className="border-green-200 text-[10px] text-green-600 uppercase"
                          >
                            APPROVED
                          </Badge>
                        ) : (
                          <Badge
                            variant="outline"
                            className="border-yellow-200 text-[10px] text-yellow-600 uppercase"
                          >
                            PENDING
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell>
                        <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}

          <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
            <p>Displaying 1 - 4 of 24 entries</p>
            <div className="flex items-center gap-2">
              <span>Results per page:</span>
              <select className="rounded border p-1">
                <option>10</option>
              </select>
              <div className="ml-4 flex gap-1">
                <Button variant="outline" size="icon" className="h-8 w-8">
                  &lt;
                </Button>
                <Button variant="default" size="icon" className="h-8 w-8 bg-blue-600">
                  1
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8 border-transparent">
                  2
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8 border-transparent">
                  3
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  &gt;
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Detail Panel */}
      <div className="flex h-full w-80 shrink-0 flex-col overflow-hidden rounded-2xl border bg-card shadow-sm">
        <div className="border-b p-4">
          <div className="mb-4 flex items-start gap-3">
            <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
              <FileCode2 className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-sm font-bold">MH-Admin 25-0044</h3>
              <p className="text-xs text-muted-foreground">Document ID: #5221386_20251212</p>
            </div>
          </div>

          <Tabs defaultValue="detail" className="w-full">
            <TabsList className="grid h-9 w-full grid-cols-3 rounded-lg bg-muted/30 p-1">
              <TabsTrigger value="detail" active className="text-xs">
                Detail
              </TabsTrigger>
              <TabsTrigger value="activity" className="text-xs">
                Activity
              </TabsTrigger>
              <TabsTrigger value="version" className="text-xs">
                Version
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="flex-1 space-y-6 overflow-y-auto p-4">
          <div className="flex min-h-[160px] flex-col items-center justify-center rounded-xl border border-dashed border-red-200 bg-slate-50/50 p-4 text-center">
            <Badge
              variant="outline"
              className="mb-4 border-red-200 bg-red-50 text-[10px] text-red-500"
            >
              DEMO DOCUMENT ONLY
            </Badge>
            <div className="mb-2 opacity-30">
              <FileText className="h-8 w-8" />
            </div>
            <p className="max-w-[200px] text-[10px] text-muted-foreground">
              Preview is currently restricted. Please download to view full content.
            </p>
            <Button variant="outline" size="sm" className="mt-4 h-8 text-xs">
              <Maximize2 className="mr-2 h-3 w-3" /> View Fullscreen
            </Button>
          </div>

          <div>
            <h4 className="mb-2 text-xs font-semibold text-muted-foreground uppercase">
              RECIPIENTS
            </h4>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-xs text-white">
                CO
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-dashed border-slate-300 bg-slate-200 text-slate-400">
                +
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="mb-1 text-xs font-semibold text-muted-foreground uppercase">
                CREATED ON
              </h4>
              <p className="text-xs font-bold">12-12-2025 12:15 AM</p>
            </div>
            <div>
              <h4 className="mb-1 text-xs font-semibold text-muted-foreground uppercase">STATUS</h4>
              <p className="flex items-center gap-1 text-xs font-bold text-green-600">
                <span className="h-2 w-2 rounded-full bg-green-500"></span> ACTIVE
              </p>
            </div>
          </div>

          <div>
            <h4 className="mb-2 text-xs font-semibold text-muted-foreground uppercase">FOLDER</h4>
            <div className="flex items-center gap-2 rounded-md bg-muted/50 p-2">
              <span className="text-xs">📁</span>
              <span className="text-xs font-medium">Nhân sự (Human Resources)</span>
            </div>
          </div>

          <div>
            <h4 className="mb-2 text-xs font-semibold text-muted-foreground uppercase">TAGS</h4>
            <div className="flex flex-wrap gap-2">
              <span className="text-[10px] font-medium text-blue-600">#Company Docs</span>
              <span className="text-[10px] font-medium text-blue-600">#Internal</span>
              <span className="text-[10px] font-medium text-blue-600">#2025</span>
            </div>
          </div>
        </div>

        <div className="flex gap-3 border-t p-4">
          <Button variant="outline" className="h-9 flex-1 text-xs">
            <Download className="mr-2 h-3 w-3" /> Download
          </Button>
          <Button className="h-9 flex-1 bg-blue-600 text-xs">Edit Details</Button>
        </div>
      </div>
    </div>
  );
}
