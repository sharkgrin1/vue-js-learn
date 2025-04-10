<script setup>
import logo from '@/assets/logo.svg'
import {useRoute} from "vue-router";

const isPageActive = (path) => {
  const currentPath = useRoute().path;
  return currentPath === path;
};
</script>

<template>
  <nav class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">

        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex shrink-0 items-center">
            <img class="h-8 w-auto" :src="logo" alt="Company name">
          </div>
          <div class="sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <RouterLink to="/" :class="[
                  isPageActive('/')? 'bg-gray-900 text-white' :
                  'text-gray-300  ml-3 hover:bg-gray-700 hover:text-white', 'rounded-md',
                   'px-3', 'py-2', 'ml-3', 'text-sm', 'font-medium']">
                Home
              </RouterLink>
              <RouterLink to="/jobs" :class="[
                  isPageActive('/jobs')? 'bg-gray-900 text-white' :
                  'text-gray-300  ml-3 hover:bg-gray-700 hover:text-white',
                   'rounded-md','px-3', 'py-2', 'text-sm', 'font-medium']">
                Jobs
              </RouterLink>
              <RouterLink to="/jobs/add" :class="[
                  isPageActive('/jobs/add')? 'bg-gray-900 text-white' :
                  'text-gray-300  ml-3 hover:bg-gray-700 hover:text-white',
                  'rounded-md', 'px-3','py-2', 'text-sm', 'font-medium']">
                Add Job
              </RouterLink>
            </div>
          </div>
        </div>

      </div>
    </div>
  </nav>
</template>