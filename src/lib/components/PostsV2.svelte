<script lang="ts">
	import type { MarkdownFileMetadata } from '$lib/types';
	import { getFilename } from '$lib/util';

	let { posts, pathPrefix }: { posts: MarkdownFileMetadata[]; pathPrefix: string } = $props();

	const files = posts?.map(({ path, metadata }) => {
		const name = getFilename({ path });
		return { name, title: metadata.title };
	});
</script>

{#if files}
	{#each files as f}
		<div class="flex flex-col gap-4">
			<a href={`${pathPrefix}/${f.name}`}>{f.title}</a>
		</div>
	{/each}
{/if}
