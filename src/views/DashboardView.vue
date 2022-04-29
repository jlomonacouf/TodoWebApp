<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import axios from 'axios';
import Header from '../components/Header.vue';

export default defineComponent({
    name: "Dashboard",
    data() {
        return {};
    },
    methods: {},
    components: { Header }
});
</script>

<template>
    <Header />
    <div class="text-gray-800 antialiased py-6 sm:py-12">
        <span class="text-2xl font-bold ml-24">My Projects</span>
        <div class="mt-4 mx-24 bg-white shadow-md rounded-lg">
            <div class="h-2 rounded-t-md" style="background-color: #14b8a6" />
            <div class="px-8 py-6">
                <div class="projectCard flex flex-col">
                    <div class="projectImage bg-gray-300">
                        <p class="text-8xl text-center">MFP</p>
                    </div>
                    <div class="projectText bg-red-500 font-bold">
                        <p>My first Project!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.blackSvg {
    filter: invert(100%)
}
.projectCard {
    width: 20%;
}
.projectImage {
    height: 250px;
}
.projectText {
    height: 50px;
}
</style>