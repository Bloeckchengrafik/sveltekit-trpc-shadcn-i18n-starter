import {testRouter} from "$lib/trpc/routes/test";
import {t} from "$lib/trpc/t";

export const router = t.router({
    user: testRouter
});

export type Router = typeof router;