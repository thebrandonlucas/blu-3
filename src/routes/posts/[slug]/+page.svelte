<script lang="ts">
	import { onMount, type Component } from 'svelte';
	import { page } from '$app/stores';

	let { title, post } = $props();

	let c: Component = $state(null);
	onMount(async () => {
		c = await import(`$lib/md/${$page.params.slug}.md`);
	});
</script>

{JSON.stringify({ title, post })}
{JSON.stringify(c)}
<h1>{title}</h1>
<c></c>
