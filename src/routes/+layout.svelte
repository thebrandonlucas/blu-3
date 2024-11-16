<script lang="ts">
	import '../app.css';
	import Nav from '../components/Nav.svelte';
	let { children } = $props();
</script>

<div class="prose text-black marker:text-black">
	<Nav />
	{@render children()}
</div>
