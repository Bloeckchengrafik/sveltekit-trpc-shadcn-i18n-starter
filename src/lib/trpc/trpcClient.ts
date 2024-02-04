import type { Router } from '$lib/trpc/router';
import { createTRPCClient, type TRPCClientInit } from 'trpc-sveltekit';

let browserClient: ReturnType<typeof createTRPCClient<Router>>;

export function trpc(init?: TRPCClientInit|unknown) {
    const isBrowser = typeof window !== 'undefined';
    if (isBrowser && browserClient) return browserClient;
    const client = createTRPCClient<Router>({ init: init as TRPCClientInit });
    if (isBrowser) browserClient = client;
    return client;
}