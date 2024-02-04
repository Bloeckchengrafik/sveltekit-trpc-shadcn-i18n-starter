import {t} from "$lib/trpc/t";
import {auth} from "$lib/trpc/middleware/login";
import {z} from "zod";

export const testRouter = t.router({
    greeting: t.procedure.query(async (e) => {
        return `Hello tRPC v10 @ ${new Date().toLocaleTimeString()} for ${e.ctx.identifier}!`;
    }),

    greetingAuth: t.procedure
        .use(auth)
        .input(z.string())
        .query(async (e) => {
            return `Hello ${e.input}! Your token is ${e.ctx.token} and your identifier is ${e.ctx.identifier}!`;
        })
});