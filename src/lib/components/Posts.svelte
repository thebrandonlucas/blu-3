<script lang="ts">
	import type { MarkdownFileData, MarkdownFiles, PathMetadata } from '$lib/types';
	import { getMdFiles } from '$lib/util';
	import { onMount } from 'svelte';

	let {
		numVisible = undefined,
		directory = undefined
	}: {
		numVisible: number | undefined;
		directory: PathMetadata | undefined;
	} = $props();

	let mdFiles: MarkdownFiles | undefined = $state(undefined);
	onMount(async () => {
		const files = getMdFiles(directory);
		if (files) {
			mdFiles = await Promise.all(
				files.map(async ({ path, metadata }): Promise<MarkdownFileData> => {
					console.log({ path });
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
