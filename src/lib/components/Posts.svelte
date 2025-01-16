<script lang="ts">
	import type { MarkdownFileMetadata } from '$lib/types';
	import { formatDate, getFilename } from '$lib/util';

	let {
		posts,
		pathPrefix,
		sectionTitle,
		numShown = 3,
		smallTitle = false
		// TODO:: sortBy descending on specified key (date by default)
		//sortBy = 'descending'
	}: {
		posts: MarkdownFileMetadata[];
		pathPrefix: string;
		sectionTitle?: string;
		numShown?: number;
		smallTitle?: boolean;
		//sortBy: 'descending' | 'ascending';
	} = $props();

	const files = $state(
		posts
			?.map(({ path, metadata }) => {
				const name = getFilename({ path });
				return { ...metadata, name, date: formatDate(metadata.date) };
			})
			// sort descending
			.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
	);
</script>

{#if files}
	{#if sectionTitle}
		{#if smallTitle}
			<h2 class="my-8">{sectionTitle}</h2>
		{:else}
			<h1 class="my-8">{sectionTitle}</h1>
		{/if}
	{/if}
	{#each files as f, i}
		{#if i < numShown}
			<div class="flex flex-col gap-4">
				<div>
					<a href={`${pathPrefix}/${f.name}`}>
						<span>{f.date}</span>: <span>{f.title}</span>
					</a>
				</div>
			</div>
		{/if}
	{/each}
	{#if files.length > numShown}
		<br />
		<a class="pt-8" href={pathPrefix}><i>See more</i></a>
	{/if}
{/if}
