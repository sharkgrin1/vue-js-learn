<script setup>

defineProps({
  background: {
    type: String
  }
});
</script>

<template>
  <div :class="`max-w-sm mx-auto ${background} shadow-md rounded-lg p-6 mb-5`">
    <slot/>
  </div>
</template>