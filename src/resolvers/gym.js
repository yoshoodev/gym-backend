const Gym = {
    branches: (parent,_,context) =>
        context.prisma.gym.
        findUnique({where: {id: parent.id}}).branches(),
}

module.exports = {
    Gym,
}