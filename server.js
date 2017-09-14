
const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema')
const loaders = require('./loader')

const port = process.env.PORT || 4000
const app = express()

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
  context: {
    loaders
  }
}))

app.listen(port, () => {
  console.log(`listening to port *:${port}. press ctrl + c to cancel.`)
})
