<!--Composition API-->
<script setup>

import {onMounted, ref} from "vue";

const employees = ref(['John', 'Jane', 'Susan']);
const loadingStatus = ref(false);
const website = ref("https://www.google.com/");
const employee = ref('');

const clickEvent = () => {
  loadingStatus.value = !loadingStatus.value;
};

const addEmployee = () => {
  employees.value.push(employee.value);
  employee.value = '';
};

const deleteEmployee = (index) => {
  employees.value.splice(index, 1);
};

function fakeHttpCall() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(["Person1", "Person2", "Person3"]);
    }, 300);
  });
}

onMounted(async () => {
  try {
    employees.value = await fakeHttpCall();
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <h1>Company Information</h1>

  <form @submit.prevent="addEmployee">
    <label for="add-employee">Add employee</label>
    <input id="add-employee" name="employee" type="text" v-model="employee">
    <button type="submit">Submit</button>
  </form>

  <br>

  <p v-if="loadingStatus">Loading...</p>
  <p v-else>List of employees:</p>

  <ol>
    <li v-for="(employee, i) in employees" :key="employee">
      <span>{{ employee }}</span>
      <button @click="deleteEmployee(i)">Delete</button>
    </li>
  </ol>

  <br>

  <a :href="website">Google website</a>

  <br>
  <br>
  <button @click="clickEvent">Click me</button>

</template>

<style scoped>
</style>
