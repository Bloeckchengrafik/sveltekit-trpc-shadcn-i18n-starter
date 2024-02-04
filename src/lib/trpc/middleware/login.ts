import { t } from '$lib/trpc/t';
import {TRPCError} from "@trpc/server";

export const auth = t.middleware(async ({ next, ctx }) => {
    if (!ctx.token) { // TODO check token
        throw new TRPCError({
            code: 'UNAUTHORIZED',
            message: 'error.auth.unauthorized',
        })
    }
    return next();
});
