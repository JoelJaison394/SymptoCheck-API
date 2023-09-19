// store.js

import { writable } from 'svelte/store';

// Initialize a writable store
export const page = writable({ data: [] });