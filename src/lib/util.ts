import type { MarkdownFileMetadata, PathMetadata } from "./types";

export function getMdFiles(d?: PathMetadata): MarkdownFileMetadata[] | undefined {
  if (d) {
    return Object.entries(d).map(([path, { metadata }]) => ({
      path: makeRelativeMdPath(path),
      metadata
    }));
  }
}

// Replace the relative path to the md files being passed in to the relative path
// of the md folder to the current component so that we can import from here
//
// - strip anything before the 'md/'
// - concatenate with the current relative path to the '.md' file
export function makeRelativeMdPath(path: string, currentMdDir = '../') {
  const prefixStripped = path.replace(/.*?(md\/)/, '$1');
  return `${currentMdDir}${prefixStripped}`;
}

export function getFilename({ path, withExtension = false }: { path: string, withExtension?: boolean }) {
  const prefixStripped = path.split('/').at(-1);
  return withExtension ? prefixStripped : prefixStripped?.replace('.md', '')
}

export function formatDate(date: string) {
  return date.split('T')[0];
}


