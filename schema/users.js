const { GraphQLList, GraphQLID } = require('graphql')
const User = require('./user')

module.exports = {
  type: new GraphQLList(User),
  description: 'Represent users',
  args: {
    id: {
      type: GraphQLID,
      description: 'The id of the users'
    }
  },
  async resolve (_, { id }, { loaders }) {
    const users = await loaders.user.load(id)
    return users
  }
}
