<script lang="ts">
	import Home from '$lib/md/home.svx';
	import { articles, blog } from '$lib/store';
</script>

<Home articles={$articles} blog={$blog} />
