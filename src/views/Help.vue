<template>
  <div class="our-help">
    <h2>{{ pageName }}</h2>
    <p>{{ PageDiscription }}</p>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      pageName: "Help Page",
      PageDiscription: "Welcome To About Page",
    };
  },
  name: "help",
};
</script>