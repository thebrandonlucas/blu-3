<script lang="ts">
	import type {
		MarkdownFileData,
		MarkdownFiles,
		Metadata,
		MetaGlobImport,
		PathMetadata
	} from '$lib/types';
	import { onMount } from 'svelte';

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
		if (files) {
			mdFiles = await Promise.all(
				files.map(async ({ path, metadata }): Promise<MarkdownFileData> => {
					const file = await import(path);
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
	{#each mdFiles as f, i}
		{#if i < (numVisible || Infinity)}
			<f.file.default></f.file.default>
		{/if}
	{/each}
{:else}
	<!-- TODO: do we need a loading spinner? -->
	no files
{/if}
