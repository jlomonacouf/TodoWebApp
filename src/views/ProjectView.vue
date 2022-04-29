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
    <div class="text-gray-800 antialiased py-6 flex-col sm:py-12">
        <span class="text-2xl font-bold ml-24">My Projects</span>
        <div class="mt-4 mx-24 bg-white shadow-md rounded-lg">
            <div class="h-2 rounded-t-md" style="background-color: #14b8a6" />
            <div class="px-8 py-6">
                <span class="text-xl">Project Numero Uno</span>
                <div class="flex flex-wrap flex-row space-x-2 w-full">
                    <div class="flex flex-wrap p-2 gap-4 bg-gradient-to-r from-cyan-500 to-blue-700 rounded-md">
                        <img src="../assets/list-checkbox.svg" class="svgImage blackSvg" width="60px" />
                        <div class="flex p-2 flex-col my-auto">
                            <span class="text-center text-white font-semibold text-lg">Open Issues</span>
                            <span class="text-center text-white font-bold">2</span>
                        </div>
                    </div>
                    <div class="flex flex-wrap p-2 gap-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-md">
                        <img src="../assets/person.svg" class="svgImage blackSvg" width="60px" />
                        <div class="flex p-2 flex-col my-auto">
                            <span class="text-center text-white font-semibold text-lg">Unassigned</span>
                            <span class="text-center text-white font-semibold text-lg">Issues</span>
                            <span class="text-center text-white font-bold">54</span>
                        </div>
                    </div>
                    <div class="flex flex-wrap p-2 gap-4 bg-gradient-to-r from-red-700 to-yellow-800 rounded-md">
                        <img src="../assets/clock.svg" class="svgImage blackSvg" width="50px" />
                        <div class="flex p-2 flex-col my-auto">
                            <span class="text-center text-white font-semibold text-lg">Late Issues</span>
                            <span class="text-center text-white font-bold">54</span>
                        </div>
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
</style>