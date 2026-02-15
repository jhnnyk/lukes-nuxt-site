<script setup lang="ts">
import Header from '/components/Header.vue';

const { data: posts } = await useAsyncData("blog", () =>
  queryCollection("wtdevlog").all()
);
</script>

<template>
  <div>
    <Header />
    <h1>Warren Tech Devlog</h1>
    <p>
      Posts written while I was a student at Warren Tech's game development appreticeship program. Games from this program have been branded under 3to1games, a name that references the program's cross-discipline nature.
    </p>
    <ul>
      <li v-for="post in posts" :key="post.date">
        <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
