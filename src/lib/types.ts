export type Metadata = {
  title: string;
  author: string;
  date: string; // ISO
  description: string;
};

export type MarkdownFileData = {
  metadata: Metadata;
  path: string;
  file: MarkdownFile;
};

export type MarkdownFileMetadata = Omit<MarkdownFileData, 'file'>

export type MarkdownFiles = MarkdownFileData[];

export type PathMetadata = Record<string, { metadata: Metadata }>
