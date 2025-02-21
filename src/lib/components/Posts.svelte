<script lang="ts">
	import type { MarkdownFileMetadata } from '$lib/types';
	import { formatDate, getFilename } from '$lib/util';

	let {
		posts,
		pathPrefix,
		sectionTitle,
		numShown,
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
				return { ...metadata, name, date: metadata.date ? formatDate(metadata.date) : null };
			})
			// sort descending
			.sort((a, b) =>
				a.date && b.date ? new Date(b.date).getTime() - new Date(a.date).getTime() : 0
			)
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
		{#if i < (numShown || Infinity)}
			<ul class="m-0">
				<li class="m-0">
					<a href={`${pathPrefix}/${f.name}`}>
						{#if f.date}
							<span>{f.date}</span>:
						{/if}
						<span>{f.title}</span>
					</a>
				</li>
			</ul>
		{/if}
	{/each}
	{#if numShown && files.length > numShown}
		<br />
		<a class="pt-8" href={pathPrefix}><i>See more</i></a>
	{/if}
{/if}
