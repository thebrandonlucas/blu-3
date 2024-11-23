<script lang="ts">
	import Readme from '$lib/md/readme.svx';
	import { getMdFiles } from '$lib/util';

	const articles = getMdFiles(import.meta.glob('../lib/md/articles/*', { eager: true }));
</script>

<Readme {articles} />
