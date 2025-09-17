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

// bugFour
const bugFour = ref("");
function updateBugFour1() {
  bugFour.value = ",...,...";
}
function updateBugFour2() {
  bugFour.value = ".,...,..";
}
function updateBugFour3() {
  bugFour.value = "..,...,.";
}
function updateBugFour4() {
  bugFour.value = "...,...,";
}
function updateBugFour5() {
  bugFour.value = ",...,...";
}
function updateBugFour6() {
  bugFour.value = ".,...,..";
}
function updateBugFour7() {
  bugFour.value = "..,...,.";
}
function updateBugFour8() {
  bugFour.value = "...,...,";
}
function runBugFour() {
  setTimeout(updateBugFour1, 0);
  setTimeout(updateBugFour2, 150);
  setTimeout(updateBugFour3, 300);
  setTimeout(updateBugFour4, 450);
  setTimeout(updateBugFour5, 600);
  setTimeout(updateBugFour6, 750);
  setTimeout(updateBugFour7, 900);
  setTimeout(updateBugFour8, 1150);
}

// run all animations
onMounted(() => {
  setInterval(runAnimationOne, 750);
  setInterval(runAnimationTwo, 800);
  setInterval(runBugThree, 400);
  setInterval(runBugFour, 1300);
});
</script>

<template>
  <div>
    <div class="animation-one">
      <!----------------Title Heading------------------>
      <div>
        <h1>Luke's Hall of Bugs &nbsp; {{ bugOne }}</h1>
      </div>

      <!----------------Bug One------------------>
      <div>
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
      </div>

      <!----------------Bug Two------------------>
      <div>
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
      </div>

      <!----------------Bug Three------------------>
      <div>
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
      </div>

      <!----------------Bug Four------------------>
      <div>
        <hr />
        <!--Basic Stats-->
        <div class="flex-container">
          <div>
            <p><span class="underline">Species:</span> Rope Bug</p>
          </div>
          <div>
            <p><span class="underline">Discovered:</span> today</p>
          </div>
          <div>
            <p><span class="underline">Found by:</span> (donation)</p>
          </div>
        </div>
        <!--Blurb + Bug-->
        <p>
          Another gift left at my doorstep. I find the formation of this lil'
          wriggler kind of rope-like, so I named it a rope.
        </p>
        <pre><code>{{ bugFour }}</code></pre>
      </div>

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
  background-color: rgb(233, 233, 233);

  border: 2px solid;
  border-color: black;

  padding-left: 10px;
  padding-right: 10px;
}
</style>
