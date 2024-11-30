<script lang="ts">
	import Words from '$lib/md/words.svx';
	import { articles, blog } from '$lib/store';
</script>

<Words articles={$articles} blog={$blog} />
