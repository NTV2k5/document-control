'use client';

import { Download } from 'lucide-react';
import { useState } from 'react';
import { DocumentDetailPanel } from '@/components/dashboard/published/DocumentDetailPanel';
import { DocumentGrid } from '@/components/dashboard/published/DocumentGrid';
import { DocumentTable } from '@/components/dashboard/published/DocumentTable';
import { PublishedTabs } from '@/components/dashboard/published/PublishedTabs';
import { TrendingHashtags } from '@/components/dashboard/TrendingHashtags';
import { Button } from '@/components/ui/button';
import {
  publishedDocumentsList,
  publishedDocuments,
  documentDetailMock,
  trendingTags,
} from '@/utils/mockData';

export default function PublishedDocuments() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedDocId, setSelectedDocId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('all');

  // Filter docs for List view
  const filteredDocs = publishedDocumentsList.filter((doc) => {
    if (activeTab === 'all') {
      return true;
    }
    if (activeTab === 'academic') {
      return doc.name.toLowerCase().includes('academic');
    }
    if (activeTab === 'financial') {
      return doc.name.toLowerCase().includes('financial');
    }
    return true;
  });

  // For Grid view, we mock the filtering since publishedDocuments is a separate mock array in this demo
  const gridDocs = publishedDocuments.filter((doc) => {
    if (activeTab === 'all') {
      return true;
    }
    if (activeTab === 'academic') {
      return doc.tags.some((t) => t.toLowerCase().includes('academic'));
    }
    if (activeTab === 'financial') {
      return false;
    } // mock data doesn't have financial
    return true;
  });

  // Calculate counts for the tabs using the list view data
  const counts = {
    all: publishedDocumentsList.length,
    academic: publishedDocumentsList.filter((d) => d.name.toLowerCase().includes('academic'))
      .length,
    financial: publishedDocumentsList.filter((d) => d.name.toLowerCase().includes('financial'))
      .length,
  };

  const selectedDoc = selectedDocId ? documentDetailMock : null;

  return (
    <div className="flex h-[calc(100vh-8rem)] flex-col gap-6 lg:flex-row">
      {/* Main Content Area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <div className="mb-4">
          <TrendingHashtags tags={trendingTags} />
        </div>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">Published Documents</h2>
          <Button className="rounded-full bg-blue-600 px-6 font-bold shadow-sm hover:bg-blue-700">
            <Download className="mr-2 h-4 w-4" /> Export Excel
          </Button>
        </div>

        <PublishedTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          viewMode={viewMode}
          setViewMode={setViewMode}
          counts={counts}
        />

        <div className="flex-1 overflow-y-auto pr-2 pb-4">
          {viewMode === 'grid' ? (
            <DocumentGrid
              docs={gridDocs}
              selectedDocId={selectedDocId}
              onSelect={setSelectedDocId}
            />
          ) : (
            <DocumentTable
              docs={filteredDocs}
              selectedDocId={selectedDocId}
              onSelect={setSelectedDocId}
            />
          )}

          <div className="mt-6 flex flex-col items-center justify-between gap-4 text-sm font-medium text-slate-500 sm:flex-row">
            <p>
              Displaying 1 - {viewMode === 'grid' ? gridDocs.length : filteredDocs.length} of{' '}
              {counts.all} entries
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span>Results per page:</span>
              <select className="rounded-lg border border-slate-200 bg-white p-1.5 font-bold text-slate-700 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20">
                <option>10</option>
                <option>20</option>
                <option>50</option>
              </select>
              <div className="ml-4 flex gap-1">
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-lg shadow-sm">
                  &lt;
                </Button>
                <Button
                  variant="default"
                  size="icon"
                  className="h-8 w-8 rounded-lg bg-blue-600 font-bold shadow-sm"
                >
                  1
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-lg font-bold text-slate-500 hover:bg-slate-100"
                >
                  2
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-lg font-bold text-slate-500 hover:bg-slate-100"
                >
                  3
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-lg shadow-sm">
                  &gt;
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Detail Panel */}
      <DocumentDetailPanel
        selectedDoc={selectedDoc}
        onClose={() => {
          setSelectedDocId(null);
        }}
      />
    </div>
  );
}
