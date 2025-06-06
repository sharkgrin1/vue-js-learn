<script setup>
import {onMounted, reactive} from "vue";
import axios from "axios";
import {useRoute, useRouter} from "vue-router";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import BackButton from "@/components/BackButton.vue";
import {useToast} from "vue-toastification";

const state = reactive({
  job: {},
  isLoading: true,
});

const route = useRoute();
const router = useRouter();
const id = route.params.id;

const toast = useToast();

const deleteJob = async () => {
  const confirmDelete = window.confirm("Delete job?");
  if (!confirmDelete) {
    return;
  }
  try {
    const response = await axios.delete(`/api/jobs/${id}`);
    toast.success(`Job ${response.data.title} is deleted`);
    await router.push("/jobs");
  } catch (error) {
    console.error(error);
    toast.error(`Job is not deleted`);
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
  <BackButton/>

  <section v-if="!state.isLoading" class="bg-gray-100">
    <div class="container m-auto py-10 px-6">
      <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
        <main>
          <div
              class="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
          >
            <div class="text-gray-600 mb-4">{{ state.job.type }}</div>
            <h1 class="text-3xl font-bold mb-4">{{ state.job.title }}</h1>
            <div
                class="text-gray-600 mb-4 flex align-middle justify-center md:justify-start"
            >
              <div class="text-orange-700 flex items-center">
                <span class="material-icons">location_on</span>
                <span class="ml-1">{{ state.job.location }}</span>
              </div>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-green-800 text-lg font-bold mb-6">
              Job Description
            </h3>

            <p class="mb-4">
              {{ state.job.title }}
            </p>

            <h3 class="text-green-800 text-lg font-bold mb-2">Salary</h3>

            <p class="mb-4">{{ state.job.salary }} / Year</p>
          </div>
        </main>

        <aside>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-6">Company Info</h3>

            <h2 class="text-2xl">{{ state.job.company.name }}</h2>

            <p class="my-2">
              {{ state.job.company.description }}
            </p>

            <hr class="my-4"/>

            <h3 class="text-xl">Contact Email:</h3>

            <p class="my-2 bg-gray-100 p-2 font-bold">
              {{ state.job.company.contactEmail }}
            </p>

            <h3 class="text-xl">Contact Phone:</h3>

            <p class="my-2 bg-gray-100 p-2 font-bold">{{ state.job.company.contactPhone }}</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-xl font-bold mb-6">Manage Job</h3>
            <RouterLink
                :to="`/jobs/edit/${state.job.id}`"
                class="bg-gray-800 text-white hover:bg-gray-500 transition text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">
              Edit Job
            </RouterLink>
            <button
                @click="deleteJob"
                class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">
              Delete Job
            </button>
          </div>
        </aside>
      </div>
    </div>
  </section>

  <div v-else class="text-center mt-100">
    <PulseLoader/>
  </div>
</template>