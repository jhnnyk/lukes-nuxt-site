<script setup>
// imports
import { ref } from "vue";
import { bugOne, bugTwo, bugThree, bugFour } from "@/composables/bugs.js";

defineProps(["name", "date", "finder", "blurb", "species"]);
</script>

<template>
  <div>
    <div>
      <hr />
      <!--Basic Stats-->
      <div class="flex-container">
        <div>
          <p><span class="underline">Species:</span> {{ name }}</p>
        </div>
        <div>
          <p><span class="underline">Discovered:</span> {{ date }}</p>
        </div>
        <div>
          <p><span class="underline">Found by:</span> {{ finder }}</p>
        </div>
      </div>
      <!--Blurb + Bug-->
      <p>
        {{ blurb }}
      </p>
      <pre><code>{{ species }}</code></pre>
    </div>
  </div>
</template>

<style scoped>
p {
  color: black;

  font-family: "Times New Roman", Times, serif;

  font-size: 16px;

  width: 100%;
}

code {
  color: black;

  font-size: 16px;

  margin: 10px;
  padding: 10px;
}

pre {
  color: black;

  font-size: 16px;

  margin: 10px;
  padding: 10px;
}

/* Class Styles */

.underline {
  text-decoration: underline;
}

.flex-container {
  display: flex;
  flex-direction: row;

  padding: 0px;
  margin: 0px;
}

.flex-container div {
  background-color: rgb(233, 233, 233);

  border: 2px solid;
  border-color: black;

  padding-left: 10px;
  padding-right: 10px;
}
</style>
