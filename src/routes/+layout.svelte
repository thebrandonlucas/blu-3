<script lang="ts">
	import '../app.css';
	import Nav from '../components/Nav.svelte';
	let { children } = $props();
</script>

<div class="prose mx-auto flex flex-col gap-12">
	<Nav />
	{@render children()}
</div>
