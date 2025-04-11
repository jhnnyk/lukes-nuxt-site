<script setup>
useHead({
  bodyAttrs: {
    id: "newlook",
  },
});
</script>

<template>
  <div>
    <NewHeader />
    <br />
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Published games:</p>

    <div class="flex-container thumbnails">
      <Thumbnail
        :image="`/images/thumbnails/thehunt.png`"
        :imagetitle="`Ooh, this game looks fun.`"
        :imagealt="`The preview image for *The Hunt*. An epic tentacle monster crawls through a subway.`"
        :link="`/projects/thehunt`"
      >
        <div class="thumb-desc">
          <p class="underline">The Hunt (2025)</p>
          <p>
            Team Size: <span class="dark-text">Nine</span> <br />
            Engine: <span class="dark-text">Unreal Engine 5</span> <br />
            Role: <span class="dark-text">Project Manager, Level Design</span>
            <br />
            Made In: <span class="dark-text">&#8776; 48 hrs.</span>
          </p>
        </div>
      </Thumbnail>

      <Thumbnail
        :image="`/images/thumbnails/occulinaryclub.png`"
        :imagetitle="`This game also looks fun.`"
        :imagealt="`A cartoon drawing of what appears to be a mad scientist with a knife and whisk. This game could be weird...`"
        :link="`/projects/occulinaryclub`"
      >
        <div class="thumb-desc">
          <p class="underline">The Occulinary Club (2024)</p>
          <p>
            Team Size: <span class="dark-text">Six</span> <br />
            Languages:
            <span class="dark-text">Javascript, HTML, CSS</span> <br />
            Role:
            <span class="dark-text"
              >Project Manager, Game Design, Web Development</span
            >
            <br />
            Made In: <span class="dark-text">&#8776; 2 Weeks</span>
          </p>
        </div>
      </Thumbnail>
    </div>
  </div>
</template>
