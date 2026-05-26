"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Download, FileText, FileSpreadsheet, LayoutGrid, List, MoreHorizontal, Maximize2, FileCode2
} from "lucide-react";
import { publishedDocuments, publishedDocumentsList } from "@/utils/mockData";

export default function PublishedDocuments() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedDocId, setSelectedDocId] = useState<string>("MH-Admin_25-0044");

  return (
    <div className="flex gap-6 h-[calc(100vh-8rem)]">
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Published Documents</h2>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Download className="mr-2 w-4 h-4" /> Export Excel
          </Button>
        </div>

        <div className="flex justify-between items-center mb-6 border-b border-border pb-2">
          <Tabs defaultValue="all" className="w-[400px]">
            <TabsList className="border-none">
              <TabsTrigger value="all" active>ALL (24)</TabsTrigger>
              <TabsTrigger value="academic">ACADEMIC DOCS (12)</TabsTrigger>
              <TabsTrigger value="financial">FINANCIAL (8)</TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="flex items-center gap-2">
            <button 
              className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-muted-foreground hover:bg-muted'}`}
              onClick={() => setViewMode('grid')}
            >
              <LayoutGrid className="w-5 h-5" />
            </button>
            <button 
              className={`p-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-muted-foreground hover:bg-muted'}`}
              onClick={() => setViewMode('list')}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto pr-2 pb-4">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {publishedDocuments.map(doc => (
                <Card 
                  key={doc.id} 
                  className={`cursor-pointer transition-all hover:border-blue-300 ${selectedDocId === doc.id ? 'border-blue-500 ring-1 ring-blue-500' : ''}`}
                  onClick={() => setSelectedDocId(doc.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="h-16 w-16 bg-muted/50 rounded-lg flex items-center justify-center shrink-0">
                        {doc.type === 'PDF' && <FileText className="w-8 h-8 text-red-500" />}
                        {doc.type === 'EXCEL' && <FileSpreadsheet className="w-8 h-8 text-green-500" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                          <h4 className="font-semibold text-sm truncate mr-2">{doc.name}</h4>
                          <button className="text-muted-foreground"><MoreHorizontal className="w-4 h-4" /></button>
                        </div>
                        <Badge variant="success" className="mt-1 mb-3 text-[10px] px-1.5 py-0">✓ APPROVED</Badge>
                        
                        <div className="flex justify-between items-end mt-2">
                          <div className="text-[10px] text-muted-foreground">
                            <p>Created by: <span className="text-blue-600">{doc.creator}</span></p>
                            <p>Created on: {doc.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-[10px] text-muted-foreground mb-1">RECIPIENTS:</p>
                            <div className="flex -space-x-2">
                              <div className="w-5 h-5 rounded-full bg-blue-100 border border-white"></div>
                              <div className="w-5 h-5 rounded-full bg-green-100 border border-white"></div>
                              <div className="w-5 h-5 rounded-full bg-slate-100 border border-white flex items-center justify-center text-[8px]">+2</div>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-3 pt-3 border-t">
                          <span className="text-[10px] text-blue-600 font-medium">{doc.tags[0]}</span>
                          <span className="text-[10px] text-muted-foreground flex items-center gap-1">👁 {doc.views} views</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="bg-card rounded-xl border">
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
                      onClick={() => setSelectedDocId("MH-Admin_25-0044")}
                    >
                      <TableCell>
                        {doc.type === 'PDF' && <FileText className="w-5 h-5 text-red-500" />}
                        {doc.type === 'EXCEL' && <FileSpreadsheet className="w-5 h-5 text-green-500" />}
                        {doc.type === 'WORD' && <FileText className="w-5 h-5 text-blue-500" />}
                      </TableCell>
                      <TableCell className="font-medium max-w-[200px] truncate">{doc.name}</TableCell>
                      <TableCell className="text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-slate-200"></div>
                          {doc.creator}
                        </div>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{doc.date}</TableCell>
                      <TableCell className="text-muted-foreground">{doc.views}</TableCell>
                      <TableCell>
                        {doc.status === 'APPROVED' ? (
                          <Badge variant="outline" className="text-green-600 border-green-200 uppercase text-[10px]">APPROVED</Badge>
                        ) : (
                          <Badge variant="outline" className="text-yellow-600 border-yellow-200 uppercase text-[10px]">PENDING</Badge>
                        )}
                      </TableCell>
                      <TableCell><MoreHorizontal className="w-4 h-4 text-muted-foreground" /></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
          
          <div className="flex justify-between items-center mt-4 text-sm text-muted-foreground">
            <p>Displaying 1 - 4 of 24 entries</p>
            <div className="flex items-center gap-2">
              <span>Results per page:</span>
              <select className="border rounded p-1"><option>10</option></select>
              <div className="flex ml-4 gap-1">
                <Button variant="outline" size="icon" className="h-8 w-8">&lt;</Button>
                <Button variant="default" size="icon" className="h-8 w-8 bg-blue-600">1</Button>
                <Button variant="outline" size="icon" className="h-8 w-8 border-transparent">2</Button>
                <Button variant="outline" size="icon" className="h-8 w-8 border-transparent">3</Button>
                <Button variant="outline" size="icon" className="h-8 w-8">&gt;</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Detail Panel */}
      <div className="w-80 shrink-0 bg-card border rounded-2xl flex flex-col h-full overflow-hidden shadow-sm">
        <div className="p-4 border-b">
          <div className="flex items-start gap-3 mb-4">
            <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
              <FileCode2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-sm">MH-Admin 25-0044</h3>
              <p className="text-xs text-muted-foreground">Document ID: #5221386_20251212</p>
            </div>
          </div>
          
          <Tabs defaultValue="detail" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-muted/30 p-1 rounded-lg h-9">
              <TabsTrigger value="detail" active className="text-xs">Detail</TabsTrigger>
              <TabsTrigger value="activity" className="text-xs">Activity</TabsTrigger>
              <TabsTrigger value="version" className="text-xs">Version</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          <div className="border border-dashed border-red-200 rounded-xl bg-slate-50/50 p-4 text-center flex flex-col items-center justify-center min-h-[160px]">
            <Badge variant="outline" className="text-red-500 border-red-200 bg-red-50 mb-4 text-[10px]">DEMO DOCUMENT ONLY</Badge>
            <div className="opacity-30 mb-2"><FileText className="w-8 h-8" /></div>
            <p className="text-[10px] text-muted-foreground max-w-[200px]">Preview is currently restricted. Please download to view full content.</p>
            <Button variant="outline" size="sm" className="mt-4 text-xs h-8">
              <Maximize2 className="w-3 h-3 mr-2" /> View Fullscreen
            </Button>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-muted-foreground uppercase mb-2">RECIPIENTS</h4>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center text-xs">CO</div>
              <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400">+</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-xs font-semibold text-muted-foreground uppercase mb-1">CREATED ON</h4>
              <p className="text-xs font-bold">12-12-2025 12:15 AM</p>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-muted-foreground uppercase mb-1">STATUS</h4>
              <p className="text-xs font-bold flex items-center gap-1 text-green-600">
                <span className="w-2 h-2 rounded-full bg-green-500"></span> ACTIVE
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-muted-foreground uppercase mb-2">FOLDER</h4>
            <div className="flex items-center gap-2 bg-muted/50 p-2 rounded-md">
              <span className="text-xs">📁</span>
              <span className="text-xs font-medium">Nhân sự (Human Resources)</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-muted-foreground uppercase mb-2">TAGS</h4>
            <div className="flex flex-wrap gap-2">
              <span className="text-[10px] font-medium text-blue-600">#Company Docs</span>
              <span className="text-[10px] font-medium text-blue-600">#Internal</span>
              <span className="text-[10px] font-medium text-blue-600">#2025</span>
            </div>
          </div>
        </div>
        
        <div className="p-4 border-t flex gap-3">
          <Button variant="outline" className="flex-1 text-xs h-9">
            <Download className="w-3 h-3 mr-2" /> Download
          </Button>
          <Button className="flex-1 bg-blue-600 text-xs h-9">
             Edit Details
          </Button>
        </div>
      </div>
    </div>
  );
}
