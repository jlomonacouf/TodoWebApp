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
                <div class="grid">
                    <div>
                        <img src="../assets/clock.svg" alt="">
                        <div class="projectDescription">
                            <p>My first project</p>
                            <p>10 assigned issues</p>
                        </div>
                    </div>
                    <div><img src="../assets/list-checkbox.svg" alt=""></div>
                    <div><img src="../assets/logo.svg" alt=""></div>
                    <div><img src="" alt=""></div>
                    <div><img src="" alt=""></div>
                    <div><img src="" alt=""></div>
                    <div><img src="" alt=""></div>
                    <div><img src="" alt=""></div>
                    <div><img src="" alt=""></div>
                    <div><img src="" alt=""></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.blackSvg {
    filter: invert(100%)
}
.grid {
    display:grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 15rem));
    gap: 1rem;
}
.grid > div {
    background: lightgray;
    padding: 1rem;
    display: grid;
    place-items: center;
}
.grid > div::before {
    content: "";
    padding-top: 100%;
    display: block;
    grid-area: 1 / 1 / 2 / 2;
}
.projectDescription {
    padding-top: 1em;
    width: 100%;
    text-align: center;
}
.grid > div > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    grid-area: 1 / 1 / 2 / 2;
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