<!--Options API-->

<script>
export default {
  data() {
    return {
      employees: ['John', 'Jane', 'Susan'],
      loadingStatus: false,
      website: "https://www.google.com/"
    };
  },

  methods: {
    clickEvent() {
      this.loadingStatus = !this.loadingStatus;
    }
  }
};
</script>

<template>
  <h1>Company Information</h1>

  <p v-if="loadingStatus">Loading...</p>
  <p v-else>List of employees:</p>

  <ol>
    <li v-for="employee in employees" :key="employee">
      {{ employee }}
    </li>
  </ol>

  <br>

  <!--  or just :href-->
  <a v-bind:href="website">Google website</a>

  <br>
  <br>
  <button v-on:click="clickEvent">Click me</button>

</template>

<style scoped>
</style>
