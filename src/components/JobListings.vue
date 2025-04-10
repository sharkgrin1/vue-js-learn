<script setup>
import jobsJson from "@/jobs.json"
import JobListing from "@/components/JobListing.vue";
import {ref} from "vue";

const jobs = ref(jobsJson);

defineProps({
  limit: Number,
  showAllJobsButton: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <section class="bg-gray-100 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-black mb-6 text-center">
        Browse Jobs
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <JobListing v-for="job in jobs.splice(0, limit)" :key="job.id" :job="job" />
      </div>
    </div>
  </section>

  <section v-if="showAllJobsButton" class="m-auto max-w-lg my-10 px-6">
    <a href="/jobs" class="block px-4 py-3 bg-black text-white text-center rounded-full hover:bg-gray-600 transition">
      View All Jobs
    </a>
  </section>
</template>