<template>
  <div id="whole">
    <Header />
    <main>
      <h1>What Can JavaScript Do?</h1>
      <p>JavaScript can change HTML attribute values.</p>
      <img id="myImage" src="/images/erase-employment-game/fancyCeiling.png" />

      <button
        onclick="document.getElementById('whole').classList.add('upsidedown')"
      >
        Invert
      </button>
      <button
        onclick="document.getElementById('whole').classList.remove('upsidedown')"
      >
        Revert
      </button>
      <Footer />
    </main>
  </div>
</template>
