<script lang="ts">
	import { onMount } from 'svelte';

	type Metadata = {
		title: string;
		author: string;
		date: string; // ISO
		description: string;
	};

	type MarkdownFileData = {
		metadata: Metadata;
		path: string;
		file: MarkdownFile;
	};

	type MarkdownFiles = MarkdownFileData[];

	type PathMetadata = { path: string; metadata: Metadata };

	type MetaGlobImport = Record<string, any>;

	let {
		numVisible = undefined,
		directory = undefined
	}: {
		numVisible: number | undefined;
		directory: MetaGlobImport | undefined;
	} = $props();

	// Replace the relative path to the md files being passed in to the relative path
	// of the md folder to the current component so that we can import from here
	//
	// - strip anything before the 'md/'
	// - concatenate with the current relative path to the '.md' file

	function makeRelativeMdPath(path: string, currentMdDir = '../') {
		const prefixStripped = path.replace(/.*?(md\/)/, '$1');
		return `${currentMdDir}${prefixStripped}`;
	}

	function getMdFiles(d?: MetaGlobImport): PathMetadata[] | undefined {
		console.log({ d });
		if (d) {
			return Object.entries<Metadata>(d).map(([path, metadata]) => ({
				path: makeRelativeMdPath(path),
				metadata
			}));
		}
	}

	let mdFiles: MarkdownFiles | undefined = $state(undefined);
	onMount(async () => {
		const files = getMdFiles(directory);
		console.log({ files });
		if (files) {
			console.log({ mdFiles });
			mdFiles = await Promise.all(
				files.map(async ({ path, metadata }): Promise<MarkdownFileData> => {
					const file = await import(path);
					console.log({ file });
					return {
						path,
						metadata,
						file
					};
				})
			);
		}
	});
</script>

{#if mdFiles}
	{#each mdFiles as f}
		<f.file.default></f.file.default>
	{/each}
{:else}
	no files
{/if}
