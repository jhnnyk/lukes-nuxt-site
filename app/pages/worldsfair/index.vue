<template>
  <div class="everything">
    <h1>World's Fair!</h1>
    <p>How is it going?</p>
    <p>
      Well, I wouldn't have guessed that things would end up like this. But the
      unfortunate consequence of all of this garbage is that I ended up stuck in
      a hole all of last night. It was pretty terrible. Nobody wants to get
      hole-ed like I did! It was truly must indubitably horrifically awful.
      manganimous. Enthusiastically! Enthusiastically!
    </p>
  </div>
</template>

<script setup>
// The language needs to be set to 'English' in order for the "hyphens" CSS property to split words into multiple lines. The text looks better that way.
useHead({
  htmlAttrs: { lang: "en" },
});
</script>

<style scoped>
.everything {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-family: arial;
}

p {
  font-size: 24px;
  text-align: justify;
  hyphens: auto;

  width: 90%;
  max-width: 500px;
}
</style>
