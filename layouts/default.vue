<template>
  <nav>
    <div class="flex-container">
      <div><a class="topnav-link" href="/">Home</a></div>
      <div><a class="topnav-link" href="/about">About</a></div>
      <div><a class="topnav-link" href="/devlog/devloghome">Dev Log</a></div>
      <div><a class="topnav-link" href="/projects/projectshome">Projects</a></div>
    </div>
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
