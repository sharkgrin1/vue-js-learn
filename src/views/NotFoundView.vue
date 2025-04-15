<script setup>

</script>

<template>
  <section class="text-center flex flex-col justify-center items-center h-120">
    <span class="material-icons md-80 text-yellow-600">warning</span>
    <h1 class="text-6xl mb-4">404 Not Found</h1>
    <p class="text-xl mb-5">Page does not exist</p>
    <RouterLink to="/" class="text-white bg-gray-600 hover:bg-gray-800 rounded-md px-3 py-2">
      Return to Home
    </RouterLink>
  </section>
</template>

<style scoped>
.material-icons.md-80 {
  font-size: 80px;
}
</style>