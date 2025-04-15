<script setup>
import JobListing from "@/components/JobListing.vue";
import {onMounted, reactive} from "vue";
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import axios from "axios";

const state = reactive({
  jobs: [],
  isLoading: true,
});

defineProps({
  limit: Number,
  showAllJobsButton: {
    type: Boolean,
    default: false
  }
});

onMounted(async () => {
  try {
    const response = await axios.get('/api/jobs');
    state.jobs = response.data;
  } catch (error) {
    console.error(error);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <section class="bg-gray-100 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-black mb-6 text-center">
        Browse Jobs
      </h2>

      <div v-if="state.isLoading" class="text-center">
        <PulseLoader/>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <JobListing v-for="job in state.jobs.slice(0, limit || state.jobs.length)" :key="job.id" :job="job"/>
      </div>
    </div>
  </section>

  <section v-if="showAllJobsButton" class="m-auto max-w-lg my-10 px-6">
    <RouterLink to="/jobs"
                class="block px-4 py-3 bg-black text-white text-center rounded-full hover:bg-gray-600 transition">
      View All Jobs
    </RouterLink>
  </section>
</template>