const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } = require('graphql')

const Blog = require('./blog')

const User = new GraphQLObjectType({
  name: 'User',
  description: 'Represents user',
  fields () {
    return {
      _id: {
        type: GraphQLString
      },
      firstName: {
        type: GraphQLString
      },
      lastName: {
        type: GraphQLString
      },
      fullName: {
        type: GraphQLString,
        resolve (data) {
          return [data.firstName, data.lastName].join(' ')
        }
      },
      age: {
        type: GraphQLInt,
        resolve (data) {
          return data && data.age ? data.age : 0
        }
      },
      blog: {
        type: Blog,
        args: {
          id: { type: GraphQLID }
        },
        async resolve (data, { id }, { loaders }) {
          const blogs = await loaders.blog.load(id)
          return blogs && blogs[0]
        }
      }
    }
  }
})

module.exports = User
