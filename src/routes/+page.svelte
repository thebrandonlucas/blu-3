<script lang="ts">
	import Posts from '$lib/components/Posts.svelte';
	import Quote from '$lib/components/Quote.svelte';
	import Readme from '$lib/md/readme.md';
	import mdFiles from '$lib/md';
	import { metadata } from '$lib/md/readme.md';
	import { onMount, type Component } from 'svelte';

	const articles = import.meta.glob('../lib/md/articles/*', { eager: true });
	const blogs = import.meta.glob('../lib/md/blogs/testblog.md', { eager: true });

	const p = '$lib/md';
	let md;
	onMount(async () => {
		md = await import(p);
		console.log({ md });
	});
</script>

<Quote></Quote>

{#each Object.entries(mdFiles) as [other, f]}
	{JSON.stringify(other)}
	<svelte:component this={f} />
{/each}
