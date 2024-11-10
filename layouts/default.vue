<template>
  <nav>
    <ul>
      <li class="topnav"><NuxtLink to="/">Home</NuxtLink></li>
      <li class="topnav"><NuxtLink to="/about">About</NuxtLink></li>
      <li class="topnav"><NuxtLink to="/devlog/devloghome">Development Log</NuxtLink></li>
      <li class="topnav"><NuxtLink to="/projects/projectshome">Projects</NuxtLink></li>
    </ul>
    <hr>
  </nav>
  <main>
    <slot />
    <br></br>
    <hr></hr>
    <img style="width: 50%;" src="/images/email.png"/>
    <hr></hr>
  </main>
</template>
