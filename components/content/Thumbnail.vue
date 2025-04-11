<script setup>
defineProps(["desc", "image", "link", "imagetitle", "imagealt"]);
</script>

<template>
  <div style="display: inline">
    <!-- Make sure to write ':href="link"'. The semicolon says we're using computer magic (instead of a string), but we still use quotes around 'link' without the curly brackets. Different than how we write {{ label }}, Dont ask me why. -->
    <a :href="link" class="thumbnail">
      <img
        :src="image"
        class="thumbnail-image"
        :title="imagetitle"
        :alt="imagealt"
      />
      <p><slot> There's nothing here!?</slot></p>
    </a>
  </div>
</template>
