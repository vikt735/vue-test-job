<script>
import LayoutTamplete from '@/components/Layout/LayoutTamplete.vue';
export default {
  name: 'app',
  components: {
    LayoutTamplete
  }
}
</script>

<template>
  <layout-tamplete/>
</template>

<style>
* {
  --colors-text-result: rgb(118, 120, 125);
}
#app {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  color: rgb(51, 51, 51);
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  line-height: 18px;
}
a {
  text-decoration: none;
}

ul {
  padding: 0;
  margin: 0;
}
p {
  word-break: break-all;
  padding: 0;
  margin: 0;
}
li {
  list-style-type: none;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
