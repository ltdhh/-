<template>
  <div id="app">
    <img src="@/assets/2.jpg" alt="" />

    唱歌 跳舞

    <div>8787545</div>
    <h3>今天天气不错</h3>
  </div>
</template>

<script>
import aaa from "./pages/aaa.vue";
import bbb from "./pages/bbb.vue";
export default {
  name: "App",
  components: {
    aaa,
    bbb,
  },
};
</script>

<style>
#app {
  padding: 0;
  margin: 100px;
  height: 400px;
  width: 600px;
  border: 1px solid red;
}
img {
  vertical-align: bottom;
}
</style>
