<script setup lang="ts">
import Header from "/components/Header.vue";

const { data: posts } = await useAsyncData("blog", () =>
  queryCollection("langscodes").all()
);
</script>

<template>
  <div>
    <Header />
    <h1>Langs and Codes</h1>
    <p>Ya hoo!</p>
    <ul>
      <li v-for="post in posts" :key="post.date">
        <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
