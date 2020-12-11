<template>
  <div class="post-box">
    <span class="post-views">{{ views }}</span>
    <h3 class="post-title">{{ title }}</h3>
    <span class="post-date">{{ date }}</span>
    <p class="post-content">
      {{ content }}
    </p>
    <div class="row">
      <div class="col-sm-6">
        <span class="post-author">{{ author }}</span>
      </div>
      <div class="col-sm-6 text-right">
        <span class="post-category">{{ category }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["views", "title", "date", "content", "author", "category"],
  name: "posts",
};
</script>

<style lang="scss" scoped>
.post-box {
  position: relative;
  padding: 15px;
  background-color: #fff;
  box-shadow: 0 0 15px #ddd;
  text-align: left;
  .post-views {
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: rgb(8, 172, 248);
    border-radius: 4px;
    padding: 1px 5px;
    color: #fff;
    text-align: center;
    font-weight: bold;
  }
  .post-date {
    display: block;
    padding: 0 0 5px;
    color: #888;
    font-size: 14px;
  }
  .post-content {
    line-height: 1.8;
    color: #666;
  }
  .post-author {
    background-color: #607d8b;
    padding: 6px 10px;
    border-radius: 4px;
    color: #fff;
  }
  .post-category {
    background-color: #e91e63;
    padding: 6px 10px;
    border-radius: 4px;
    color: #fff;
    text-align: right;
  }
}
</style>
