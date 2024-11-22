<script lang="ts">
	let {
		text = 'Esse quam videri',
		author = 'Marcus Tullius Cicero',
		source = { title: '', date: '', chapter: '', page: '' }
	} = $props();
</script>

<blockquote>
	<span>{text}</span>
	<footer>{author}, <i>{source.title}, {source.chapter}.</i>, p. {source.page}</footer>
</blockquote>
