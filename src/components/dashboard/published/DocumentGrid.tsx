import { DocumentCard } from './DocumentCard';

type DocumentGridProps = {
  docs: any[];
  selectedDocId: string | null;
  onSelect: (id: string) => void;
}

export function DocumentGrid({ docs, selectedDocId, onSelect }: DocumentGridProps) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {docs.map((doc) => (
        <DocumentCard
          key={doc.id}
          doc={doc}
          isSelected={selectedDocId === doc.id}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
