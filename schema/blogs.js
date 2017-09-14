const { GraphQLList, GraphQLID } = require('graphql')
const Blog = require('./blog')

module.exports = {
  type: new GraphQLList(Blog),
  description: 'Represent blogs',
  args: {
    ids: {
      type: new GraphQLList(GraphQLID),
      description: 'The ids of the blog'
    }
  },
  // resolve (source, args, root, ast) {
  async resolve (_, { ids }, { loaders }) {
    const blogs = await loaders.blog.loadMany(ids)
    return blogs
  }
}
