<template>
  <div class="hello">
    <p>Come on! take a look at this goodies one more time<br /></p>
    <h4>Inicia sesión o regístrate para comenzar</h4>
    <button @click="$router.push('login')">Log In</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
