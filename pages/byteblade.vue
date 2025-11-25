<script setup>
var content = ref("A game about fighting.");
var message = ref("");

var started = false;

var player_location = [0, 0];

const c_move_forward = ["forward", "go", "move", "walk"];
const c_fight = ["fight", "die", "kill"];

function f_move_forward() {
  content.value = "hi!!!";
}
function f_fight() {
  content.value = "yay";
}

function submit() {
  message.value = message.value.toLowerCase();
  message.value = message.value.replace(/[\s.!?]/g, "");

  if (!started) {
    content.value = "There is a door before you.";
    started = true;
  } else {
    switch (true) {
      case c_move_forward.includes(message.value):
        f_move_forward();
      case c_fight.includes(message.value):
        f_fight();
    }
  }
  message.value = "";
}
</script>

<template>
  <div class="game">
    <h1>Byte Blade</h1>
    <hr />
    <p class="content">{{ content }}</p>
    <input v-model="message" placeholder="What next?" @keyup.enter="submit" />
  </div>
</template>

<style>
body {
  margin-left: auto;
  margin-right: auto;

  background-color: black;
}

.game {
  margin-left: auto;
  margin-right: auto;

  padding: 25%;
}

p {
  color: white;
  font-size: 20px;
  font-family: monospace;
  line-height: 110%;
}

.content {
  height: 60px;
}

h1 {
  color: white;
  font-size: 48px;
}

input {
  font-size: 24px;
  height: 30px;

  padding: 5px;
}
</style>
