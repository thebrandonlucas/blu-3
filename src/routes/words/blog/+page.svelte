<script lang="ts">
	import { getMdFiles, getFilename } from '$lib/util';

	const blog = getMdFiles(import.meta.glob('../../../lib/md/blog/*', { eager: true }));
	const files = blog?.map(({ path, metadata }) => {
		const name = getFilename({ path });
		return { name, title: metadata.title };
	});
</script>

{#if files}
	{#each files as f}
		<div class="flex flex-col gap-4">
			<a href={`/words/blog/${f.name}`}>{f.title}</a>
		</div>
	{/each}
{/if}
