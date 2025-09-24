<script setup>
// imports
import { useAnimations } from "@/composables/bugs.js";
const { runAnimations } = useAnimations();

// run all animations
onMounted(() => {
  runAnimations();
});

const bugs = ref([
  {
    id: 1,
    name: "Flapper",
    date: "16/sep/25",
    finder: "Luke",
    blurb:
      "This species is called the flapper, and is a very simple bug creature.",
    species: bugOne,
  },
  {
    id: 2,
    name: "Parenthepillar",
    date: "16/sep/25",
    finder: "Luke",
    blurb: "This next guy is a pre cool one.",
    species: bugTwo,
  },
  {
    id: 3,
    name: "Tilda Worm",
    date: "16/sep/25",
    finder: "(donation)",
    blurb:
      "A curious sample that appeared at my doorstep. Seeing it's subtle elegance and complexity, I simply had to show you. (Note: formerly called the 'Title Worm', the name was changed because Luke liked 'Tilda Worm' better.)",
    species: bugThree,
  },
  {
    id: 4,
    name: "Rope Bug",
    date: "17/sep/25",
    finder: "(donation)",
    blurb:
      "Another gift left at my doorstep. I find the formation of this lil' wriggler kind of rope-like, so I named it a rope.",
    species: bugFour,
  },
]);
</script>

<template>
  <div>
    <!----------------Title Heading------------------>
    <div>
      <h1>Luke's Hall of Bugs &nbsp; {{ bugOne }}</h1>
    </div>
    <Bug
      v-for="bug in bugs"
      :key="bug.id"
      :name="bug.name"
      :date="bug.date"
      :finder="bug.finder"
      :blurb="bug.blurb"
      :species="bug.species"
    />
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
</style>
