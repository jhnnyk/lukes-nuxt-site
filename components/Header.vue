<template>
  <nav
    window.onload="document.getElementById('upsidedown').style.visibility='hidden'; document.getElementById('rightsideup').style.visibility='visible';"
  >
    <div class="flex-container">
      <div class="link">
        <a class="topnav-link" href="/">Home</a>
      </div>
      <div class="link">
        <a class="topnav-link" href="/about">About</a>
      </div>
      <div class="link">
        <a class="topnav-link" href="/devloghome">Dev Log</a>
      </div>
      <div class="link">
        <a class="topnav-link" href="/projects/projectshome">Projects</a>
      </div>
      <div>
        <FlipButton />
      </div>
    </div>
    <hr />
  </nav>
</template>
