<template>
  <div class="about">
    <h2>{{ pageName }}</h2>
    <p>{{ PageDiscription }}</p>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      pageName: "About Page",
      PageDiscription: "Welcome To About Page",
    };
  },
  name: "about",
  components: {},
};
</script>
