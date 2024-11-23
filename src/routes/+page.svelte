<script lang="ts">
	import Readme from '$lib/md/readme.svx';
	import Posts from '$lib/components/Posts.svelte';
	import Quote from '$lib/components/Quote.svelte';
	import { getMdFiles } from '$lib/util';

	const articles = getMdFiles(import.meta.glob('../lib/md/articles/*', { eager: true }));
</script>

<Readme />
{#if articles}
	<Posts posts={articles} pathPrefix="/words/articles"></Posts>
{/if}
