const { GraphQLSchema, GraphQLObjectType } = require('graphql')

const Users = require('./users')
const Blogs = require('./blogs')
const Query = new GraphQLObjectType({
  name: 'GraphQLRoot',
  description: 'Root of graphql schema',
  fields () {
    return {
      users: Users,
      blogs: Blogs
    }
  }
})

module.exports = new GraphQLSchema({
  query: Query
})
