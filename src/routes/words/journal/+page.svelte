<script lang="ts">
	import Posts from '$lib/components/Posts.svelte';
	import { journal } from '$lib/store';
</script>

<Posts posts={$journal} pathPrefix="/words/journal" sectionTitle="Journal" />
