import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {

    const body = await readBody(event)

    const { name, email, password } = typeof body === 'string' ? JSON.parse(body) : body

    await prisma.user.create({
        data: { name, email, password, schedules: [] },
    })

    return { status: 201 };
});
