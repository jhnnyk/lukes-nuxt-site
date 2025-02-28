<template>
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
</template>
