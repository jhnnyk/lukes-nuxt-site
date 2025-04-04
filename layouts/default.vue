<template>
  <div id="whole">
    <Header />
    <main>
      <slot />
      <Footer />
    </main>
    <div id="upmessage" style="display: none">
      <br />
      <p class="upsidedown image-desc">
        What do you think you're doing, turning my website upside down!?
      </p>
    </div>
  </div>
</template>
