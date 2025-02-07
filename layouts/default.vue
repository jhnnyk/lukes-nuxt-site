<template>
  <nav>
    <ul>
      <li class="topnav"><NuxtLink to="/"><span class="topnav-link">Home</span></NuxtLink></li>
      <li class="topnav"><NuxtLink to="/about"><span class="topnav-link">About</span></NuxtLink></li>
      <li class="topnav"><NuxtLink to="/devlog/devloghome"><span class="topnav-link">Dev Log</span></NuxtLink></li>
      <li class="topnav"><NuxtLink to="/projects/projectshome"><span class="topnav-link">Projects</span></NuxtLink></li>
    </ul>
    <hr>
  </nav>
  <main>
    <slot />
    <br></br>
    <hr></hr>
    <div class="contact-box">
      <hr></hr>
      <img class="contact-img" src="/images/email.png"/>
      <hr></hr>
    </div>
  </main>
</template>
