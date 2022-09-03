const User = {
    branch: (parent, _, context, __) =>
        context.prisma.member.findUnique(
            {
                where: {
                    id: parent.id
                }
            })
            .branch()
}



module.exports = {
    User,
}