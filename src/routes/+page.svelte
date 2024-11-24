<script lang="ts">
	import Home from '$lib/md/home.svx';
	import { getMdFiles } from '$lib/util';

	const articles = getMdFiles(import.meta.glob('../lib/md/articles/*', { eager: true }));
	const blog = getMdFiles(import.meta.glob('../lib/md/blog/*', { eager: true }));
</script>

<Home {articles} {blog} />
