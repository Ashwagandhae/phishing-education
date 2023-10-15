import { writable, type Writable } from 'svelte/store';

export const phishInfo: Writable<{
	email: string;
	password: string;
} | null> = writable(null);
