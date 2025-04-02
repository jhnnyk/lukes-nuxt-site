<script setup>
defineProps(["label", "date", "link"]);
</script>

<template>
  <div>
    <!-- Make sure to write ':href="link"'. The semicolon says we're using computer magic (instead of a string), but we still use quotes around 'link' without the curly brackets. Different than how we write {{ label }}, Dont ask me why. -->
    <a id="button" class="buttonlink" :href="link">
      {{ label }}<span class="date">{{ date }}</span>
      <slot />
    </a>
    <br />
  </div>
</template>
