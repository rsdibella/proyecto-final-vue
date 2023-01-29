<template>
  <nav class="navbar">
    <div class="home-pague">
      <router-link to="/">One more time</router-link>
    </div>
    <div class="links">
      <ul>
        <li>
          <router-link to="/products">Goodies</router-link>
        </li>
        <li>
          <router-link to="/profile">Profile</router-link>
        </li>
      </ul>
    </div>
    <div class="logout">
      <button @click="logout">Logout</button>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import router from "@/router";
import { RouterLink } from "vue-router";

export default defineComponent({
  name: "NavBar",
  setup() {
    let logedIn = ref<boolean>(false);
    const token = localStorage.getItem("accesToken");
    if (token) {
      logedIn = ref<boolean>(true);
    }
    return {
      logedIn,
      logout: () => {
        localStorage.removeItem("accessToken");
        router.push({ name: "home" });
      },
    };
  },
});
</script>

<style scoped>
nav {
  height: 20px;
  width: auto;
  background-color: rgb(147, 105, 147);
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style: none;
}

li {
  padding: 1rem;
}
a {
  color: white;
  text-decoration: none;
  transition: 0.25s;
  font-weight: bold;
}

.home-page a:hover {
  color: white;
}
.logout {
  width: max-content;
}
</style>
