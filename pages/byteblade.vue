<script setup>
// ------------------------------------------------------------
// Initial Variables
// ------------------------------------------------------------
var content = ref("A game about fighting.");
var message = ref("");

var started = false;

// ------------------------------------------------------------
// PLAYER DATA
// ------------------------------------------------------------
var player_location = [0, 0];

// ------------------------------------------------------------
// MAP DATA
// ------------------------------------------------------------

// function to make make data easier
function MapLocation(entity) {
  this.entity = entity;
}

const map_data = new Map([
  [[0, 0], new MapLocation("door")],
  [[0, 1], new MapLocation("grass")],
]);
// ------------------------------------------------------------
// GENERAL COMMANDS
// ------------------------------------------------------------

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
  "re",
];
function f_quit() {
  location.reload();
}
// any unknown commands
function f_unknown() {
  content.value = "Unknown command. Type 'HELP' for more info.";
}
// help command
const c_help = ["help", "h", "helpme", "idk"];
function f_help() {
  content.value = "This is a game. Type commands to START. Use QUIT to reset.";
}
// start command
const c_start = [
  "start",
  "begin",
  "go",
  "letsgo",
  "letusgo",
  "letsago",
  "postprologue",
  "forward",
  "continue",
  "progress",
];
function f_start() {
  started = true;
  content.value = "There is a door.";
}

// player actions
const c_move_forward = ["forward", "go", "move", "walk", "advance", "approach"];
function f_move_forward() {
  content.value = "Being unlocked, the door opens easily.";
}
const c_fight = ["fight", "die", "kill"];
function f_fight() {
  content.value = "DOOR enters the battle!";
}

// ------------------------------------------------------------
// PROMPTING
// ------------------------------------------------------------

// when the player presses enter
function submit() {
  message.value = message.value.toLowerCase();
  message.value = message.value.replace(/[\s.!?,'"-_]/g, "");

  // general functions
  if (c_quit.includes(message.value)) {
    f_quit();
    message.value = "";
    return;
  }
  if (c_help.includes(message.value)) {
    f_help();
    message.value = "";
    return;
  }

  // check if first time player interacting
  if (!started) {
    if (c_start.includes(message.value)) {
      f_start();
    } else {
      f_unknown();
    }
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

// ------------------------------------------------------------
// END OF 'SCRIPT' TAGS
// ------------------------------------------------------------
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
