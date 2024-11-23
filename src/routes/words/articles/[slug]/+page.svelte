<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let md: MarkdownFile | undefined = $state(undefined);

	onMount(async () => {
		md = await import(`$lib/md/articles/${$page.params.slug}.md`);
	});
</script>

{#if md}
	<md.default></md.default>
{/if}
