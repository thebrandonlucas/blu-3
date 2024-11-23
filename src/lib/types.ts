export type Metadata = {
  title: string;
  date: string; // ISO
  description?: string;
  tags?: [];
  popularity?: number; // 1-10 
  completeness?: number; // 1-10
};

export type MarkdownFileData = {
  metadata: Metadata;
  path: string;
  file: MarkdownFile;
};

export type MarkdownFileMetadata = Omit<MarkdownFileData, 'file'>

export type MarkdownFiles = MarkdownFileData[];

export type PathMetadata = Record<string, { metadata: Metadata }>
