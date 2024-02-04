import type { RequestEvent } from '@sveltejs/kit';
import type { inferAsyncReturnType } from '@trpc/server';

export async function createContext(event: RequestEvent) {
    return {
        token: event.cookies.get('cs.tn'),
        identifier: event.cookies.get('cs.id'),
    };
}

export type Context = inferAsyncReturnType<typeof createContext>;