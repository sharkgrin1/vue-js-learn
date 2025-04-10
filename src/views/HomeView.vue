<script setup>
import Hero from "@/components/Hero.vue";
import Cards from "@/components/Cards.vue";
import JobListings from "@/components/JobListings.vue";
</script>

<template>
  <Hero title="Job Search"/>
  <Cards />
  <JobListings :limit="3" :showAllJobsButton="true" />
</template>