<template>
  <div class="blog-comp container">
    <div class="heading mt-3">
      <h2>{{ pageName }}</h2>
      <p>{{ pageDiscription }}</p>
    </div>
    <div class="row">
      <div class="col-md-8">
        <div class="post-area">
          <posts
            v-for="post in Posts"
            :key="post.id"
            :views="post.views"
            :title="post.title"
            :date="post.date"
            :content="post.content"
            :author="post.author"
            :category="post.category"
            class="mb-3"
          />
        </div>
      </div>
      <div class="col-md-4">
        <div class="sidebar">
          <sidebar-blog />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Posts from "../components/blog/AllPosts.vue";
import SidebarBlog from "../components/blog/BlogSidebar";
import JsonPost from "../json/BlogPosts.json";
export default {
  data: function () {
    return {
      pageName: "BlogPage",
      pageDiscription: "Welcome To BlogPost Page",
      Posts: JsonPost,
    };
  },
  name: "blog-comp",
  components: {
    Posts,
    SidebarBlog,
  },
};
</script>
