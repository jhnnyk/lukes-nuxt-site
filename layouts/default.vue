<template>
  <div id="whole">
    <Header />
    <main>
      <slot />
      <Footer />
    </main>
    <div id="upmessage" class="image-desc" style="display: none">
      <p class="upsidedown">
        What do you think you're doing, turning my website upside down!?
      </p>
    </div>
  </div>
</template>
