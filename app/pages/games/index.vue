<script setup lang="ts">
import Header from "/components/Header.vue";

const { data: posts } = await useAsyncData("blog", () =>
  queryCollection("games").all()
);
</script>

<template>
  <div>
    <Header />
    <h1>Games</h1>
    <p>
      Every project here I've worked on with the help of cool coders, musicians,
      artists, and writers.
    </p>
    <ul>
      <li v-for="post in posts" :key="post.date">
        <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
