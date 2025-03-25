<script setup>
useHead({
  bodyAttrs: {
    id: "newlook",
  },
});
</script>

<template>
  <div style="display: block">
    <NewHeader />

    <div class="flex-container thumbnails">
      <Thumbnail
        :image="`/images/thumbnails/thehunt.png`"
        :link="`/projects/thehunt`"
      >
        <div class="thumb-desc">
          <p class="underline">The Hunt (2025)</p>
          <p>
            Team Size: <span class="dark-text">9</span> <br />
            Engine: <span class="dark-text">Unreal Engine 5</span> <br />
            Role: <span class="dark-text">Project Manager, Level Design</span>
            <br />
            Made In: <span class="dark-text">&#8776; 48 hrs.</span>
          </p>
        </div>
      </Thumbnail>
      <Thumbnail
        :image="`/images/thumbnails/thehunt.png`"
        :link="`/projects/thehunt`"
      >
        <p>The Hunt (2025)</p>
      </Thumbnail>
      <Thumbnail
        :image="`/images/thumbnails/thehunt.png`"
        :link="`/projects/thehunt`"
      >
        <p>The Hunt (2025)</p>
      </Thumbnail>
    </div>

    <p>
      Hello! tehwoigwfo whfhwoghwifghwdoghwd dif whoigwdifghwod fi
      wgowdhfiwdhgiogwdiogfhiowdfhiodwgfodwfgowid dfw dwguofgwdoifgiodwfgho
      dwgfhwdoigiowghiodwghf owdifgwdogwohgow
    </p>
  </div>
</template>
