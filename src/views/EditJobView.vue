<script setup>
import JobForm from "@/components/JobForm.vue";
import {onMounted, reactive} from "vue";
import {useRoute} from "vue-router";
import axios from "axios";
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import router from "@/router/index.js";
import {useToast} from "vue-toastification";

const toast = useToast();
const route = useRoute();
const id = route.params.id;

const state = reactive({
  job: {},
  isLoading: true
});

const handleSubmit = async (job) => {
  try {
    const response = await axios.put(`/api/jobs/${id}`, job);
    toast.success('Job is edited!');
    await router.push(`/jobs/${response.data.id}`);
  } catch (error) {
    console.error(error);
    toast.error('Job is not edited');
  }
};

onMounted(async () => {
  try {
    const response = await axios.get(`/api/jobs/${id}`);
    state.job = response.data;
  } catch (error) {
    console.error(error);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <div v-if="state.isLoading" class="text-center mt-100">
    <PulseLoader/>
  </div>
  <JobForm v-else :job="state.job" form-title-text="Edit job" :handle-submit="handleSubmit"/>
</template>