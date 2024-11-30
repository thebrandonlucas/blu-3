<script lang="ts">
	import { page } from '$app/stores';
	import Post from '$lib/components/Post.svelte';
</script>

<Post slug={$page.params.slug} />
