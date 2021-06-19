<template>
  <h5 class="text-center font-bold text-lg mt-2">
    <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-pink-500">
          Latest <a href="https://dev.to" rel="noopener" target="_blank">Dev.to</a> posts
    </span>
  </h5>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-4 justify-center">
    <template v-if="LoadingPosts">
      <h5 class="m-auto w-1/6 text-center text-blue-400">
        Loading
      </h5>
    </template>
    <template v-else>
      <a :href="post.url" target="_blank" rel="noopener" v-for="(post, idx) in posts" :key="post.id"
         class="w-full p-5 shadow-lg hover:shadow-sm transition-all transform hover:-translate-y-5"
      >
        <img :src="post.cover_image" alt="Cover Image" v-if="!!post.cover_image">
        <img
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--NQu5vr9i--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nvjh80kv1nr41sw6wxke.png"
            alt="Cover Image" class="h-30 w-full" v-else>
        <hr>
        <div class="my-2">
          <img :src="post.user.profile_image_90" alt="Profile image" class="rounded-full inline h-10">
          {{ post.user.name }}
        </div>
        <hr>
        <span class="text-primary">
          {{ post.title }}
        </span>
        <p class="text-gray-400">
          {{post.description}}
        </p>
      </a>
    </template>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";

async function LoadPosts() {
  const data = await fetch('https://dev.to/api/articles')
      .then(res => res.json());
  posts.value = data;
}

const posts = ref([]);
const LoadingPosts = ref(false);
onMounted(async () => {
  LoadingPosts.value = true;
  await LoadPosts();
  LoadingPosts.value = false;
});
</script>

<style scoped>

</style>