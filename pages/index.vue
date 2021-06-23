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
                <postItem 
                v-for="post in posts"
                :key="post._id"
                :title="post.title" 
                :subtitle="post.subtitle"
                :date="post.date"
                :isRead="post.isRead"
                 />
              
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
   computed: {
    posts() {
      return this.$store.state.posts
    }
   },
    mounted() {
    this.$store.dispatch('fetchPosts')
  },
}
</script>
<style>
  /* .post-content {
    font-style: italic;
  }
  .post {
    margin-bottom: 20px;
    padding: 5px;
    border-bottom: 2px solid transparent;
  }
  .post:hover {
    border-bottom: 2px solid #e8e8e8;
  } */
</style>