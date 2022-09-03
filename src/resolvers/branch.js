const Branch = {
    members: (parent, _, context) => context.prisma.branch.findUnique({
        where: {
            id: parent.id
        }
    }).members(),
    gym: (parent, _, context) => context.prisma.branch.findUnique({where: {id: parent.id}}).gym(),
}

module.exports = {
    Branch,
}