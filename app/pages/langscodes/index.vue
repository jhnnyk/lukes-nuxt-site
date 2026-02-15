<script setup lang="ts">
const { data: posts } = await useAsyncData("blog", () =>
  queryCollection("langscodes").all()
);
</script>

<template>
  <div>
    <h1>Langs and Codes</h1>
    <p>Ya hoo!</p>
    <ul>
      <li v-for="post in posts" :key="post.date">
        <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
