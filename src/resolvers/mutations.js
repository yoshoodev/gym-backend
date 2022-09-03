// noinspection JSUnusedGlobalSymbols

const Mutation = {
    addUser: (parent, args, context) =>
        context.prisma.member.create({
            data: {
                name: args.name || undefined,
                surname: args.surname || undefined,
                email: args.email,
                role: args.role || undefined,
                country: args.country || undefined,
                city: args.city || undefined,
                phoneNumber: args.phoneNumber || undefined,
                postalCode: args.postalCode || undefined,
                street: args.street || undefined,
                number: args.number || undefined,
                branch: args.branchId ? {
                    connect: {
                        id: args.branchId,
                    }
                } : undefined,
            },
        }),
    addGym: (parent, args, context) => context.prisma.gym.create({
        data: {
            name: args.name || undefined,
            country: args.country || undefined
        }
    }),
}

module.exports = {
    Mutation,
}
