<script setup lang="ts">
const { data: posts } = await useAsyncData("blog", () =>
  queryCollection("games").all()
);
</script>

<template>
  <div>
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
