const DataLoader = require('dataloader')

async function fetchBlog (id) {
  console.log('fetching blogs', id)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const blogs = [
        { _id: '1', title: 'John', likeCount: 4 },
        { _id: '2', title: 'Doe', likeCount: 20 },
        { _id: '3', title: 'Jane', likeCount: 13 }
      ]
      const blog = blogs.filter(b => b._id === id)
      resolve(blog && blog[0])
    }, 0)
  })
}
module.exports = new DataLoader(keys => Promise.all(keys.map(fetchBlog)), {
  cacheKeyFn (key) {
    return key.toString()
  }
})
