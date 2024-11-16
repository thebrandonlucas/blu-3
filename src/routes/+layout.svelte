<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="prose prose-slate lg:prose-xl">
	{@render children()}
</div>
