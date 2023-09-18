import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {

    const body: string | object[] = await readBody(event)

    const { name, email, password } = typeof body === 'string' ? JSON.parse(body) : body

    await prisma.user.create({
        data: {
            name,
            email,
            password,
            days: []
        },
    })

    return { status: 201 };
});
