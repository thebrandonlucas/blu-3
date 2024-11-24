<script lang="ts">
	import Words from '$lib/md/words.svx';
	import { getMdFiles } from '$lib/util';

	// TODO: make this a store and remove duplication
	const articles = getMdFiles(import.meta.glob('../../lib/md/articles/*', { eager: true }));
	const blog = getMdFiles(import.meta.glob('../../lib/md/blog/*', { eager: true }));
</script>

<Words {articles} {blog} />
