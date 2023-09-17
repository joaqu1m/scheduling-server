import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default defineEventHandler(async () => {

    const users = await prisma.user.findMany()

    return { status: 200, body: { users }};
});