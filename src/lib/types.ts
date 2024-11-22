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

export type MarkdownFiles = MarkdownFileData[];

export type PathMetadata = { path: string; metadata: Metadata };

export type MetaGlobImport = Record<string, any>;

