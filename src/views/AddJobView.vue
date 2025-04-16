<script setup>
import axios from "axios";
import router from "@/router";
import {useToast} from "vue-toastification";
import JobForm from "@/components/JobForm.vue";

const toast = useToast();

const handleSubmit = async (job) => {
  try {
    const response = await axios.post('/api/jobs', job);
    toast.success('Job is created!');
    await router.push(`/jobs/${response.data.id}`);
  } catch (error) {
    console.error(error);
    toast.error('Job is not created');
  }
};
</script>

<template>
  <JobForm :handleSubmit="handleSubmit" form-title-text="Add job"/>
</template>