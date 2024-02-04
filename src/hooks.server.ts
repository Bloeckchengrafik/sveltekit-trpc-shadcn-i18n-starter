import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import type { Handle } from '@sveltejs/kit';
import { createTRPCHandle } from 'trpc-sveltekit';

const trpcHandle = createTRPCHandle({ router, createContext });

export const handle: Handle = async (ctx) => {
	return trpcHandle(ctx);
};
