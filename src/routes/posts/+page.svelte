<script lang="ts">
	import { loadMd } from '$lib/loadMd';

	const posts = loadMd();
	console.log({ posts });
</script>

<h1>Blog Posts</h1>
<ul>
	{#each posts as post}
		<li>
			<a href={`/posts/${post.slug}`}>{JSON.stringify(post.metadata.title)}</a>
			{JSON.stringify(post)}
		</li>
	{/each}
</ul>
