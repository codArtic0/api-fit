const prisma = require("../lib/prisma")

exports.encontrarUsuario = async (id) => {
    const user = await prisma.user.findFirst({
        where: {
            id:{
                equals: id
            }
        }})
    return user
}