<script lang="ts">
	import { page } from '$app/stores';

	function getCrumbs(url: URL) {
		const links = new URL(url).pathname.split('/').filter(Boolean);
		return links.reduce<{ href: string; name: string }[]>((acc, pathSegment, i) => {
			const currentPath = acc.length > 0 ? `${acc[i - 1]}/${pathSegment}` : `/${pathSegment}`;

			acc.push({ href: currentPath, name: pathSegment });

			return acc;
		}, []);
	}

	let crumbs = getCrumbs($page.url);
</script>

<div class="flex gap-2">
	<a href="/">blu</a>
	{#each crumbs as { href, name }}
		/ <a {href}>{name}</a>
	{/each}
</div>
