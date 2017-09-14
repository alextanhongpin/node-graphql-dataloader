const DataLoader = require('dataloader')

async function fetchBlog (id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const blogs = [
        { _id: '1', title: 'John', likeCount: 4 },
        { _id: '2', title: 'Doe', likeCount: 20 },
        { _id: '3', title: 'Jane', likeCount: 13 }
      ]
      resolve(blogs.filter(u => u._id === id))
    }, 0)
  })
}
const blogLoader = new DataLoader(keys => Promise.all(keys.map(fetchBlog)), {
  cacheKeyFn: key => {
    console.log('cache kye fun', key, typeof key)
    return key + 1
  }
})

async function main () {
  const blog = await blogLoader.load(1)
  console.log(blog)
}

main()
