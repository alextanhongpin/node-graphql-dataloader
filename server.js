const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} = require('graphql')

console.log(graphql)

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve () {
          return 'hello world'
        }
      }
    }
  })
})

const query = '{hello}'

graphql(schema, query).then(result => {
  console.log(result)
})
