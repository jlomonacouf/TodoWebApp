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
    <p>nothing to see here</p>
</template>