<script lang="ts">
	import { getMdFiles, getFilename } from '$lib/util';

	const articles = getMdFiles(import.meta.glob('../../../lib/md/articles/*', { eager: true }));
	const files = articles?.map(({ path, metadata }) => {
		const name = getFilename({ path });
		return { name, title: metadata.title };
	});
</script>

{#if files}
	{#each files as f}
		<div class="flex flex-col gap-4">
			<a href={`/words/articles/${f.name}`}>{f.title}</a>
		</div>
	{/each}
{/if}
