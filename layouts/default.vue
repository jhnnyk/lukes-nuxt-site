<template>
  <nav>
    <ul>
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/about">About</NuxtLink></li>
      <li><NuxtLink to="/devlog/devloghome">Development Log</NuxtLink></li>
    </ul>
    <hr></hr>
  </nav>
  <main>
    <slot />
  </main>
</template>
