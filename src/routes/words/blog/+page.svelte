<script lang="ts">
	import Posts from '$lib/components/Posts.svelte';
	import { blog } from '$lib/store';
</script>

<Posts posts={$blog} pathPrefix="/words/blog" sectionTitle="Blog" />
