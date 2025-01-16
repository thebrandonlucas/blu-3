<script lang="ts">
	import { page } from '$app/stores';
</script>

<nav class="flex w-full justify-around max-md:flex-col max-md:gap-4">
	{#if $page.route.id === '/'}
		<a href="/words">Words</a>
		<a href="/work">Work</a>
		<a href="/about">About</a>
	{:else if $page.route.id?.endsWith('words')}
		<a href="/words/articles">Articles</a>
		<a href="/words/blog">Blog</a>
		<a href="/words/quotes">Quotes</a>
	{:else if $page.route.id?.endsWith('work')}
		<a href="/work/projects">Projects</a>
		<a href="/work/other">Other</a>
	{:else if $page.route.id?.endsWith('about')}
		<a href="/about/contact">Contact</a>
	{/if}
</nav>

<style lang="postcss">
	a {
		@apply font-bold;
	}
</style>
