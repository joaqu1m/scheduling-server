import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {

    const email = getRouterParam(event, 'email')

    const users = await prisma.user.findMany({
        where: { email: email }
    })

    return { status: 200, body: { users }};
});