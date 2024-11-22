<script lang="ts">
	import Posts from '$lib/components/Posts.svelte';
	import Quote from '$lib/components/Quote.svelte';
	import Readme from '$lib/md/readme.md';
	import mdFiles from '$lib/md';
	import { metadata } from '$lib/md/readme.md';
	import { onMount, type Component } from 'svelte';

	// First value in array is filename, second is metadata
	const articles = Object.entries(import.meta.glob('../lib/md/articles/*', { eager: true }));
	//const blogs = import.meta.glob('../lib/md/blogs/testblog.md', { eager: true });
	//

	let md: MarkdownFile;
	onMount(async () => {
		const [name, metadata] = articles[1];
		md = await import(name);
		console.log({ name, metadata, md });
	});
</script>

<Quote></Quote>

{#if md}
	<svelte:component this={md.default} />
{:else}
	<p>no</p>
{/if}
<!-- {#each Object.entries(mdFiles) as [other, f]}
	{JSON.stringify(other)}
	<svelte:component this={f} />
{/each}
-->
