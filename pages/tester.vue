<template>
  <div>
    <Header />
    <main>
      <h1>What Can JavaScript Do?</h1>
      <p>JavaScript can change HTML attribute values.</p>
      <p id="demo" style="color: red">Hm</p>
      <p id="demo2" style="color: red">Hm?</p>
      <button onclick="testFunction(); testFunction2();">Test</button>
      <Footer />
    </main>
    <NuxtLayout />
  </div>
</template>

<script setup>
useHead({
  title: "A Page to Test Code Stuffs",
});
</script>
