<script lang="ts">
	import Quote from '$lib/components/Quote.svelte';
	import Readme from '$lib/md/readme.md';
	import { metadata } from '$lib/md/readme.md';
</script>

<Quote></Quote>
<Readme />
{JSON.stringify(metadata)}
