<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';

export default defineComponent({
  name: 'Register',
  data() {
    return {
      username: '',
      password: '',
      email: '',
      firstName: '',
      lastName: '',
      usernameEmpty: false,
      passwordEmpty: false,
      passwordInvalid: false,
      emailEmpty: false,
      emailInvalid: false,
      loading: false
    }
  },
  methods: {
    login() {
      this.usernameEmpty = (this.username === '');
      this.passwordEmpty = (this.password === '');
      this.emailEmpty = (this.email === '');

      if(this.usernameEmpty === true || this.passwordEmpty === true) return;

      this.loading = true;

      axios.post('/user/create_profile', {
        username: this.username,
        password: this.password
      }).then(res => {
        if(res.data.success === true) {
          this.loading = false;
        }
      }).catch(err => {
        this.passwordInvalid = true;
        this.loading = false;
      });
    },
    goToLoginPage() {
      window.location.href = "/Login";
    }
  }
})
</script>


<template>
  <div class="text-gray-800 antialiased flex justify-center py-6 flex-col sm:py-12">
    <div class="relative py-3 sm:w-96 sm:max-auto mx-auto">
      <span class="text-2xl font-light flex justify-center">Create an account</span>
      <div class="mt-4 bg-white shadow-md rounded-lg">
        <div class="h-2 bg-indigo-400 rounded-t-md"></div>
        <div class="px-8 py-6">
          <label class="block font-semibold">Username</label>
          <p v-if="usernameEmpty" class="text-red-400 font-semibold">Please enter a username</p>
          <input v-model="username" type="text" placeholder="Username" class="border w-full h-5 px-3 py-5 mt-2 active:ring-indigo-700 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md" maxlength="25">
          <label class="block font-semibold mt-2">Password</label>
          <p v-if="passwordEmpty" class="text-red-400 font-semibold">Please enter a password</p>
          <input v-model="password" type="password" placeholder="Password" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md" maxlength="50">
          <label class="block font-semibold mt-2">Email</label>
          <p v-if="emailEmpty" class="text-red-400 font-semibold">Please enter an email</p>
          <input v-model="email" type="text" placeholder="Email" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md" maxlength="50">
          <!-- break up registration into two separate forms, then put options to enter first and last name in that form -->
          <label class="block font-semibold mt-2">First Name</label>
          <input v-model="firstName" type="text" placeholder="First name (Optional)" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md" maxlength="30">
          <label class="block font-semibold mt-2">Last Name</label>
          <input v-model="firstName" type="text" placeholder="First name (Optional)" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md" maxlength="50">
          <button @click="login()" type="submit" :disabled="loading" :class="{ 'opacity-50': loading }" class="mt-4 bg-indigo-500 text-white py-2 px-6 rounded-md hover:bg-indigo-600 active:bg-indigo-700">Get Started!</button>
        </div>
      </div>
      <div class="my-4 text-gray-500 flex w-full">
        <div class="divider mx-auto"><span class="text-xl font-light">OR</span></div>
      </div>
      <div class="text-gray-800 antialiased mt-4 bg-white shadow-md rounded flex justify-between items-baseline">
        <div class="px-8 py-6 flex w-full">
          <span class="text-lg mt-auto mb-auto">Already have an account?</span>
          <button @click="goToLoginPage()" type="submit" class="ml-auto bg-green-500 text-white mt-1 mb-1 py-2 px-6 rounded-md hover:bg-green-600 active:bg-green-700">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scope>
body {
  background-color: rgb(243 244 246);
}
.divider {
   width: 100%; 
   text-align: center; 
   border-bottom: 1px solid rgb(107 114 128);; 
   margin: 10px 0 20px; 
   height: 0.875rem;
} 
.divider span { 
    background-color: rgb(243 244 246); 
    padding:0 10px; 
}
</style>
