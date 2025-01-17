import { redirect, type Handle } from '@sveltejs/kit'

const redirects: { [x: string]: string } = {
  '/articles': '/words/articles',
  '/articles/payjoin': '/words/articles/payjoin-better-future',
  '/articles/micropayments': '/words/articles/micropayments',
  '/blog': '/words/blog',
  '/blog/reading-writing-civilization': '/words/blog/reading-writing-civilization',
  '/blog/worlds-first-monotheist': '/words/blog/worlds-first-monotheist',
  '/quotes': '/words/quotes',
  '/projects': '/work/projects',
  '/contact': '/about/contact',
}

export const handle: Handle = async ({ event, resolve }) => {
  if (redirects[event.url.pathname]) {
    throw redirect(301, redirects[event.url.pathname]);
  }
  return await resolve(event);
};

