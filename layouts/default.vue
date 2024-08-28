<template>
  <nav>
    <ul>
      <li class="topnav"><NuxtLink to="/">Home</NuxtLink></li>
      <li class="topnav"><NuxtLink to="/about">About</NuxtLink></li>
      <li class="topnav"><NuxtLink to="/devlog/devloghome">Development Log</NuxtLink></li>
    </ul>
    <hr></hr>
  </nav>
  <main>
    <slot />
  </main>
</template>
