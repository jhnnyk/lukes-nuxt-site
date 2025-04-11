<!--
This component will be used to set up a pair of images so one will show only when hovererd over, and the other will be shown nomrally. Cover image is shown on default, the hidden image is only seen on hover.
-->

<script setup>
defineProps([
  "coverimage",
  "hiddenimage",
  "covertitle",
  "hiddentitle",
  "coveralt",
  "hiddenalt",
]);
</script>

<template>
  <div class="image-switch">
    <img
      :src="coverimage"
      class="cover-image"
      :title="covertitle"
      :alt="coveralt"
    />
    <img
      :src="hiddenimage"
      class="hidden-image"
      :title="hiddentitle"
      :alt="hiddenalt"
    />
  </div>
</template>
