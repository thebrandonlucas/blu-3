<script lang="ts">
	import type { MarkdownFileMetadata } from '$lib/types';
	import { formatDate, getFilename } from '$lib/util';

	let {
		posts,
		pathPrefix,
		sectionTitle
		// TODO:: sortBy descending on specified key (date by default)
		//sortBy = 'descending'
	}: {
		posts: MarkdownFileMetadata[];
		pathPrefix: string;
		sectionTitle?: string;
		//sortBy: 'descending' | 'ascending';
	} = $props();

	const files = $state(
		posts
			?.map(({ path, metadata }) => {
				const name = getFilename({ path });
				return { ...metadata, name, date: formatDate(metadata.date) };
			})
			.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
	);
</script>

{#if files}
	{#if sectionTitle}
		<h2>{sectionTitle}</h2>
	{/if}
	{#each files as f}
		<div class="flex flex-col gap-4">
			<div>
				<a href={`${pathPrefix}/${f.name}`}>
					<span>{f.date}</span>: <span>{f.title}</span>
				</a>
			</div>
		</div>
	{/each}
{/if}
