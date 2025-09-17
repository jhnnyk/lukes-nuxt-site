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
  setTimeout(updateBugThree1, 20);
  setTimeout(updateBugThree2, 90);
}

// run all animations
onMounted(() => {
  setInterval(runAnimationOne, 750);
  setInterval(runAnimationTwo, 800);
  setInterval(runBugThree, 500);
});
</script>

<template>
  <div>
    <div class="animation-one">
      <h1>Luke's Hall of Bugs</h1>
      <!--Bug One-->
      <hr />
      <p>
        This species is called the flapper, and is a very simple bug creature.
      </p>
      <pre><code>{{ bugOne }}</code></pre>
      <!--Bug Two-->
      <hr />
      <p>This next guy is a pre cool one.</p>
      <pre><code>{{ bugTwo }}</code></pre>
      <!--Bug Three, dropped off at my doorstep!-->
      <hr />
      <p>
        A curious sample that appeared at my doorstep. Seeing it's subtle
        elegance and complexity, I simply had to show you.
      </p>
      <pre><code>{{ bugThree }}</code></pre>
      <!--End for now-->
      <hr />
    </div>
  </div>
</template>

<style>
body {
  background-color: white;
  padding: 20px;
  margin: 10px;
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
</style>
