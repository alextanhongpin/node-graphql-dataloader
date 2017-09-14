const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql')

const Blog = new GraphQLObjectType({
  name: 'Blog',
  description: 'Represents blog',
  fields () {
    return {
      _id: {
        type: GraphQLString
      },
      title: {
        type: GraphQLString
      },
      likeCount: {
        type: GraphQLInt
      }
    }
  }
})

module.exports = Blog
