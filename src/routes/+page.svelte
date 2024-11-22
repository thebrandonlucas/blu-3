<script lang="ts">
	import Posts from '$lib/components/Posts.svelte';
	import Quote from '$lib/components/Quote.svelte';
	import { onMount } from 'svelte';

	// First value in array is filename, second is metadata

	const rawArticles = import.meta.glob('../lib/md/articles/*', { eager: true });
</script>

<Quote></Quote>

<Posts numVisible={1} directory={rawArticles}></Posts>
<!-- {#each Object.entries(mdFiles) as [other, f]}
	{JSON.stringify(other)}
	<svelte:component this={f} />
{/each}
-->
