<script lang="ts">
	import '../app.css';
	import Nav from '../components/Nav.svelte';
	let { children } = $props();
</script>

<main class="prose prose-2xl mx-auto flex flex-col gap-12 px-4">
	<Nav />
	<div>
		{@render children()}
	</div>
</main>
