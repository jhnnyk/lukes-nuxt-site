<script setup lang="ts">
// import { useUpsideDown } from "../composables/useUpsideDown.js";
// import { useRightSideUp } from "../composables/useRightSideUp.js";

// const upsideButton = useUpsideDown();
// const rightSideButton = useRightSideUp();

// This is currently buggy. We need to figure out how to make the javascript composables access the document for document.getElementById of the nuxt app. It might be a problem where the nuxt app hasnt been created yet, or a problem where document doesnt refer to our Nuxt app. I dunno, but using those javascript files as in-line code under onclick works, im just trying to move it to external files.
</script>

<template>
  <div>
    <button
      id="rightsideup"
      type="button"
      class="invertbutton"
      style="display: inline"
      onclick="
      document.getElementById('whole').classList.add('upsidedown'); 
      document.getElementById('rightsideup').style.display='none'; 
      document.getElementById('upsidedown').style.display='inline'; 
      document.getElementById('upmessage').style.display='inline';"
    >
      <span>&darr;</span>
    </button>

    <button
      id="upsidedown"
      type="button"
      class="invertbutton"
      style="display: none"
      onclick="
      document.getElementById('whole').classList.remove('upsidedown'); 
      document.getElementById('upsidedown').style.display='none'; 
      document.getElementById('rightsideup').style.display='inline'; 
      document.getElementById('upmessage').style.display='none'"
    >
      <span>&uarr;</span>
    </button>
  </div>
</template>
