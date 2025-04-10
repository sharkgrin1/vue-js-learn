<script setup>

defineProps({
  background: {
    type: String
  }
});
</script>

<template>
  <div :class="`w-full ${background} shadow-md rounded-lg p-6 mb-5`">
    <slot/>
  </div>
</template>