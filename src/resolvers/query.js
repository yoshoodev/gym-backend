// noinspection JSUnusedGlobalSymbols

const Query = {
    users: (_, __, context) => context.prisma.member.findMany(),
    user: (_, args, context) => {
        if (args.id) {
            return context.prisma.member.findUnique({
                where: {
                    id: args.id || undefined,
                },
            })
        } else if (args.email) {
            return context.prisma.member.findFirst({
                where: {
                    email: args.email || undefined,
                }
            })
        } else return null;
    },
    branches: (_, __, context) => context.prisma.branch.findMany(),
    branch: (_, args, context) => context.prisma.branch.findUnique({where: {id: args.id || undefined}}),
    gyms: (_, __, context) => context.prisma.gym.findMany(),
}

module.exports = {
    Query,
}