<template>
  <nav>
    <ul>
      <li class="topnav"><a class="topnav-link" href="/">Home</a></li>
      <li class="topnav"><a class="topnav-link" href="/about">About</a></li>
      <li class="topnav"><a class="topnav-link" href="/devlog/devloghome">Dev Log</a></li>
      <li class="topnav"><a class="topnav-link" href="/projects/projectshome">Projects</a></li>
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
