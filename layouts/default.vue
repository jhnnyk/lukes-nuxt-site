<template>
  <nav>
    <ul>
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/about">About</NuxtLink></li>
      <li><NuxtLink to="/devblog/devbloghome">Development Blog</NuxtLink></li>
    </ul>
  </nav>
  <main>
    <slot />
  </main>
</template>
