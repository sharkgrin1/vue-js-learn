<script setup>
defineProps({
  title: String,
  subtitle: {
    type: String,
    default: "Job hunting platform"
  }
});
</script>

<template>
  <section class="bg-gray-800 py-20 mb-5">
    <div class="max-w-3xl mx-auto text-center px-4">
      <h1 class="text-4xl font-bold text-white mb-4">{{title}}</h1>
      <p class="text-lg text-gray-200">
        {{subtitle}}
      </p>
    </div>
  </section>

</template>