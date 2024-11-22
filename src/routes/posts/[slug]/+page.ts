	import { error } from '@sveltejs/kit';
	import { loadMd } from '$lib/loadMd';

	export async function load({ params }) {
		const posts = loadMd();
		const post = posts.find((p) => p.slug === params.slug);

		if (!post) {
			throw error(404, 'Post not found');
		}

		const contentModule = await import(`../../../md/${post.slug}.md`);
    console.log({contentModule})
		return { props: { post: contentModule.default, title: post.title } };
	}

