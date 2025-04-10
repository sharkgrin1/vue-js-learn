<script setup>
import Card from "@/components/Card.vue";
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
    <Card background="bg-gray-100">
      <h2 class="text-2xl font-bold text-gray-800 mb-2">For Developers</h2>
      <p class="text-gray-600 mb-4">
        Find a job
      </p>
      <RouterLink to="/jobs" class="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-500 transition">
        Find
      </RouterLink>
    </Card>

    <Card background="bg-green-100">
      <h2 class="text-2xl font-bold text-gray-800 mb-2">For Employers</h2>
      <p class="text-gray-600 mb-4">
        Add your jobs
      </p>
      <RouterLink to="/jobs/add" class="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-500 transition">
        Add
      </RouterLink>
    </Card>
  </div>

</template>