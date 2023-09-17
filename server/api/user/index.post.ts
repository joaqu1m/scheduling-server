import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {

    const { name, email, password } = await readBody(event)

    await prisma.user.create({
        data: {
            name,
            email,
            password
        },
    })

    return { status: 201, body: {}};
});
