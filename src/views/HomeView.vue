<template>
  <h2>Bienvenido a Fake Shop!</h2>
  <h4>
    Una tienda ficticia donde podrás navegar, encontrar productos y añadirlos a
    la cesta
  </h4>
  <h4>Inicia sesión o regístrate para comenzar</h4>
  <button @click="$router.push('login')">Log In</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    // HelloWorld,
  },
});
</script>
