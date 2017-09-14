const DataLoader = require('dataloader')

function fetchUser (id) {
  console.log('fetching users', id)
  return new Promise((resolve, reject) => {
    const users = [
        { _id: '1', firstName: 'John', lastName: 's', blog_id: '2' },
        { _id: '2', firstName: 'Jane', lastName: 'Doe', blog_id: '2' },
        { _id: '2', firstName: 'All' }
    ]
    setTimeout(() => {
      resolve(users.filter(u => u._id === id))
    }, 0)
  })
}

module.exports = new DataLoader(keys => Promise.all(keys.map(fetchUser)), {
  cacheKeyFn (key) {
    return key.toString()
  }
})
