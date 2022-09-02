const Query = {
    users(_parent, _args, context, _info) {
        return context.prisma.member.findMany()
    },
    user(_parent, args, context, _info) {
        if (args.id) {
            return context.prisma.member.findUnique({
                where: {
                    id: args.id,
                },
            })
        } else {
            return context.prisma.member.findFirst({
                where: {
                    email: args.email,
                }
            })
        }
    },
}

module.exports = {
    Query,
}