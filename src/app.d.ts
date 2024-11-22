// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

}

declare module '*.md' {
  const default: any;
  const metadata: any;
  export default default;
  export { metadata };
}

type MarkdownFile = {
  const default: any; // content
  const metadata: any; // metadata
}
