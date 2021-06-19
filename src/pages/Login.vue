<template>
<div class="flex">
  <form class="shadow-xl p-4 m-auto md:w-1/4 hover:shadow-lg transition-all" @submit.prevent="TryLogin">
    <h5 class="text-center text-primary font-bold">
      Login To Continue
    </h5>
    <hr/>
    <div>
      <label for="username">Username</label>
      <input type="text" id="username" class="p-1 w-full border-2 border-blue-200" v-model="Username">
    </div>
    <div>
      <label for="password">Password</label>
      <input type="password" id="password" class="p-1 w-full border-2 border-blue-200" v-model="Password">
    </div>
    <div class="text-center">
      <button class="mt-2 px-2 py-1 text-white text-center bg-gradient-to-r bg-green-500">
        Login
      </button>
    </div>
  </form>
</div>
</template>

<script>
import { useRouter } from 'vue-router';
import {ref} from 'vue';
import useAuth from "../auth/AuthHandler";
export default {
  name: "Login",
  setup() {
    const router = useRouter();
    const Username = ref("");
    const Password = ref("");
    const auth = useAuth();
    const TryLogin = () => {
      try {
        if (!Username.value) throw "Please enter username";
        if (!Password.value) throw "Please enter password";
        auth.Login(Username.value, Password.value);
        router.push('/');
      } catch (e) {
        alert(e);
      }
    };
    return {
      TryLogin,
      Username,
      Password
    };
  }
}
</script>

<style scoped>

</style>