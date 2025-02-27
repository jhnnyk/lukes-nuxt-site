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
        <button
          id="rightsideup"
          type="button"
          class="invertbutton"
          style="display: inline"
          onclick="document.getElementById('whole').classList.add('upsidedown'); document.getElementById('rightsideup').style.display='none'; document.getElementById('upsidedown').style.display='inline';"
        >
          <span>&darr;</span>
        </button>
        <button
          id="upsidedown"
          type="button"
          class="invertbutton"
          style="display: none"
          onclick="document.getElementById('whole').classList.remove('upsidedown'); document.getElementById('upsidedown').style.display='none'; document.getElementById('rightsideup').style.display='inline';"
        >
          <span>&uarr;</span>
        </button>
      </div>
    </div>
    <hr />
  </nav>
</template>
