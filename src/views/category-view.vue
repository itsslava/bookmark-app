<script lang="ts" setup>
import { useRoute } from 'vue-router';

const route = useRoute();
console.log(route.params.alias);
</script>

<template>Категория: {{ $route.params.alias }}</template>
