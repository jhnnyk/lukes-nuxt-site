<script setup>
// imports
import { ref } from "vue";

// bugOne
const bugOne = ref("");
function updateAnimationOne1() {
  bugOne.value = "\\()/";
}
function updateAnimationOne2() {
  bugOne.value = "/()\\";
}
function runAnimationOne() {
  setTimeout(updateAnimationOne1, 100);
  setTimeout(updateAnimationOne2, 500);
}

// bugTwo
const bugTwo = ref("");
function updateAnimationTwo1() {
  bugTwo.value = "(( ))";
}
function updateAnimationTwo2() {
  bugTwo.value = "(())";
}
function runAnimationTwo() {
  setTimeout(updateAnimationTwo1, 100);
  setTimeout(updateAnimationTwo2, 600);
}

// bugThree
const bugThree = ref("");
function updateBugThree1() {
  bugThree.value = "~-~";
}
function updateBugThree2() {
  bugThree.value = "-~-";
}
function runBugThree() {
  setTimeout(updateBugThree1, 0);
  setTimeout(updateBugThree2, 200);
}

// run all animations
onMounted(() => {
  setInterval(runAnimationOne, 750);
  setInterval(runAnimationTwo, 800);
  setInterval(runBugThree, 400);
});
</script>

<template>
  <div>
    <div class="animation-one">
      <h1>Luke's Hall of Bugs &nbsp; {{ bugOne }}</h1>

      <!----------------Bug One------------------>
      <hr />
      <!--Basic Stats-->
      <div class="flex-container">
        <div>
          <p><span class="underline">Species:</span> Flapper</p>
        </div>
        <div>
          <p><span class="underline">Discovered:</span> Yesterday</p>
        </div>
        <div>
          <p><span class="underline">Found by:</span> Luke</p>
        </div>
      </div>
      <!--Blurb + Bug-->
      <p>
        This species is called the flapper, and is a very simple bug creature.
      </p>
      <pre><code>{{ bugOne }}</code></pre>

      <!----------------Bug Two------------------>
      <hr />
      <!--Basic Stats-->
      <div class="flex-container">
        <div>
          <p><span class="underline">Species:</span> Parenthepillar</p>
        </div>
        <div>
          <p><span class="underline">Discovered:</span> Yesterday</p>
        </div>
        <div>
          <p><span class="underline">Found by:</span> Luke</p>
        </div>
      </div>
      <!--Blurb + Bug-->
      <p>This next guy is a pre cool one.</p>
      <pre><code>{{ bugTwo }}</code></pre>

      <!----------------Bug Three------------------>
      <hr />
      <!--Basic Stats-->
      <div class="flex-container">
        <div>
          <p><span class="underline">Species:</span> Title Worm</p>
        </div>
        <div>
          <p><span class="underline">Discovered:</span> Yesterday</p>
        </div>
        <div>
          <p><span class="underline">Found by:</span> (donation)</p>
        </div>
      </div>
      <!--Blurb + Bug-->
      <p>
        A curious sample that appeared at my doorstep. Seeing it's subtle
        elegance and complexity, I simply had to show you.
      </p>
      <pre><code>{{ bugThree }}</code></pre>
      <!-----------------End for now---------------->
      <hr />
    </div>
  </div>
</template>

<style>
/* Generic Styles */

body {
  background-color: white;

  padding: 20px;
  margin-left: auto;
  margin-right: auto;

  width: 90%;
  max-width: 1000px;
}

div {
  margin: none;
  padding: none;

  width: 100%;
}

h1 {
  color: black;

  font-family: "Times New Roman", Times, serif;

  font-size: 28px;
}

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
  border: 2px solid;
  border-color: black;

  padding-left: 10px;
  padding-right: 10px;
}
</style>
