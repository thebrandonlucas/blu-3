export type Post = {
  slug: string;
  // TODO: type this
  metadata: any;
};

export function loadMd(): Post[] {
  const posts = import.meta.glob('/src/lib/md/**/*.md', { eager: true });
  
  return Object.entries(posts).map(([path, module]) => {
    const slug = path.split('/').pop().replace('.md', '');
    console.log({ path, module })
    return {
      slug,
      metadata: module.metadata,
    };
  });
}

