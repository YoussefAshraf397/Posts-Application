<template>
  <div class="container">
<Navbar />
    <div class="blogs-page">
      <div class="main-content">
        <div class="container">
          <div class="columns is-mobile">
            <div class="column is-8 is-offset-2">
              <div class="section">
                <div class="title">
                  <h1>Newest Posts</h1>
                  <hr>
                </div>
                <div v-if="posts && posts.length > 0">
                  <postItem 
                  v-for="post in posts"
                  :key="post._id"
                  :title="post.title" 
                  :subtitle="post.subtitle"
                  :date="post.date"
                  :isRead="post.isRead"
                  :id="post._id"

                  />
                </div>
                <div class="no-posts-title" v-else>
                  No Posts :(

                </div>
                
              
              </div>
              <!-- end of post -->
            </div>
            <!-- end of side bar -->
          </div>
        </div>
      </div>
    </div>
   </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import postItem from '~/components/postItem'


export default{
  components:{
    Navbar,
    postItem
  },
  data() {
    return {
      title:"This is post title",
      subtitle: "this is post subtitle",

    }
  },
 fetch({store}) {
    if (store.getters['post/hasEmptyItems']) {
      console.log('fetching data in index page')
      return store.dispatch('post/fetchPosts')
    }
  },
   mounted() {
    this.$store.dispatch('post/getArchivedPosts')
  },
   computed: {
    posts() {
      return this.$store.state.post.items
    },
    archivedPosts() {
      return this.$store.state.post.archivedItems
    }
   },
}
</script>
<style>
  .no-posts-title {
    font-size: 30px;
  }
</style>