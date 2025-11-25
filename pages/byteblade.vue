<script setup>
var content = ref("A game about fighting.");
var message = ref("");

var started = false;

var player_location = [0, 0];

// general commands
const c_quit = [
  "quit",
  "giveup",
  "end",
  "gameover",
  "q",
  "clear",
  "reload",
  "reset",
];
function f_quit() {
  location.reload();
}
// any unknown commands
function f_unknown() {
  content.value = "Unknown command. Type 'HELP' for more info.";
}
const c_help = ["help", "h", "helpme", "idk"];
function f_help() {
  content.value =
    "This is a game. Type and press enter. Use QUIT to end or restart.";
}

// player actions
const c_move_forward = ["forward", "go", "move", "walk"];
function f_move_forward() {
  content.value = "hi!!!";
}
const c_fight = ["fight", "die", "kill"];
function f_fight() {
  content.value = "You approach the door. You sit before the door.";
}

// when the player presses enter
function submit() {
  message.value = message.value.toLowerCase();
  message.value = message.value.replace(/[\s.!?,'"-_]/g, "");

  // general functions
  if (c_quit.includes(message.value)) {
    f_quit();
  }
  if (c_help.includes(message.value)) {
    f_help();
    message.value = "";
    return;
  }

  // check if first time player interacting
  if (!started) {
    content.value = "There is a door before you.";
    started = true;
  } else {
    // player actions
    switch (true) {
      case c_move_forward.includes(message.value):
        f_move_forward();
        break;
      case c_fight.includes(message.value):
        f_fight();
        break;

      // unknown command
      default:
        f_unknown();
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
  width: 300px;
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
