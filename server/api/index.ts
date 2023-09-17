import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {

    // if (e.method === 'POST') {
        // const user = await prisma.user.create({
        //     data: {
        //         email: "joaquim@email.com",
        //         name: "joaquim",
        //     },
        // })

        // console.log(user)
    // }
    
    return { status: 200, body: { message: 'ok' }};
});