<script lang="ts">
	import Posts from '$lib/components/Posts.svelte';
	import { articles } from '$lib/store';
</script>

<Posts posts={$articles} pathPrefix="/words/articles" sectionTitle="Articles" />
