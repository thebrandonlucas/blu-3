<script lang="ts">
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
	import BreadCrumbs from '$lib/components/BreadCrumbs.svelte';

	let { children } = $props();
</script>

<main class="prose prose-2xl mx-auto mt-4 flex flex-col gap-12 px-4">
	<div class="flex flex-col items-center">
		<BreadCrumbs />
		<Nav />
	</div>
	<div>
		{@render children()}
	</div>
</main>
