<script lang="ts">
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
	let { children } = $props();
</script>

<main class="prose prose-2xl mx-auto mt-4 flex flex-col gap-12 px-4">
	<Nav />
	<div>
		{@render children()}
	</div>
</main>
