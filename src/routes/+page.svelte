<script lang="ts">
	import PostsV2 from '$lib/components/PostsV2.svelte';
	import Quote from '$lib/components/Quote.svelte';
	import { getMdFiles } from '$lib/util';

	const rawArticles = getMdFiles(import.meta.glob('../lib/md/articles/*', { eager: true }));
</script>

<Quote></Quote>

{#if rawArticles}
	<PostsV2 posts={rawArticles} pathPrefix="/words/articles"></PostsV2>
{/if}
