<script lang="ts">
	let {
		text = 'Lorem Ipsum',
		author = 'Unknown',
		source = { title: '', date: '', chapter: '', page: '' }
	} = $props();
</script>

<blockquote>
	<span>{text}</span>
	<footer class="ml-12">
		- {author}
		{#if source.title},<i>{source.title}</i>{/if}
		{#if source.chapter && source.page}
			<i>{source.chapter}.</i>, p. {source.page}
		{/if}
	</footer>
</blockquote>
