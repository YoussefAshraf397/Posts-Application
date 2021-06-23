
const INITIAL_DATA = {
  posts:[
    {
      _id:"1",
      title: "title post 1",
      subtitle: "subtitle post 1",
      date: new Date(),
      isRead: false
    },
    {
      _id:"2",
      title: "title post 2",
      subtitle: "subtitle post 2",
      date: new Date(),
      isRead: false
    },
    {
      _id:"3",
      title: "title post 3",
      subtitle: "subtitle post 3",
      date: new Date(),
      isRead: true
    },
    {
      _id:"4",
      title: "title post 4",
      subtitle: "subtitle post 4",
      date: new Date(),
      isRead: true
    }
  ]
}


function fetchPostsAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(INITIAL_DATA.posts)
    }, 1000)
  })
}

export const state = () => {
    return {
      posts: []
       
    }
  }

  export const actions = {
    fetchPosts({commit}) {
      return fetchPostsAPI()
        .then((posts) => {
          commit('setPosts', posts)
        })
    }
  }

  export const mutations = {
    setPosts(state, posts) {
      state.posts = posts
    }
  }
  