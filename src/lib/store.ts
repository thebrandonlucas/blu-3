import { writable } from 'svelte/store';
import type { MarkdownFileMetadata } from './types';

export const articles = writable<MarkdownFileMetadata[]>()
export const blog = writable<MarkdownFileMetadata[]>()

