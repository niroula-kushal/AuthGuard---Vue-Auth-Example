<template>
  <div class="p-1 shadow-lg overflow-hidden sticky top-0 z-10 bg-white">
    <div class="container mx-auto ">
      <div class="float-left bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-pink-500  text-2xl p-1">
        Auth Guard
      </div>
      <div class="float-right p-1">
        <template v-if="IsLoggedIn">
        <span class="text-green-500 mr-2">
          Welcome, {{User.username}}
        </span>
          <router-link to="/" class="nav-btn mr-2">
            Posts
          </router-link>
          <button class="nav-btn" @click.prevent="TryLogout">
            Logout
          </button>
        </template>
        <router-link to="/login" class="nav-btn" v-else>
          Login
        </router-link>
      </div>
    </div>
  </div>
  <div class="clear-both"></div>
</template>

<script>
import useAuth from "../auth/AuthHandler";
import {useRouter} from "vue-router";

export default {
  name: "NavBar",
  setup() {
    const auth = useAuth();
    const router = useRouter();
    const TryLogout = () => {
      auth.Logout();
      router.push('/login');
    };
    return {
      IsLoggedIn: auth.IsLoggedIn,
      TryLogout,
      User: auth.User
    };
  }
}
</script>

<style scoped>

</style>