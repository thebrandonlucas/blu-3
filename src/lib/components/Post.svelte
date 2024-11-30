<script lang="ts">
	import { onMount } from 'svelte';
	import { formatDate } from '$lib/util';

	let { slug }: { slug: string } = $props();

	// eslint-disable-next-line no-undef
	let md: MarkdownFile | undefined = $state(undefined);
	let date: string | undefined = $state(undefined);

	onMount(async () => {
		md = await import(`$lib/md/blog/${slug}.md`);
		if (md) {
			date = formatDate(md.metadata.date);
		}
	});
</script>

{#if md}
	<div class="flex flex-col items-center">
		<h2>{md?.metadata.title}</h2>
		<i>{date}</i>
	</div>
	<md.default></md.default>
{/if}
