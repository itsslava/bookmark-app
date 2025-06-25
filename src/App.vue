<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ProfileAvatar from './components/profile-avatar.vue';
import { API_ROUTES } from './api';
import { Profile } from './interfaces/profile.ts';

const profile = ref<Profile>();

async function fetchProfile() {
  const data = await fetch(API_ROUTES.profile);
  const res = (await data.json()) as Profile;
  profile.value = res;
}

onMounted(() => {
  fetchProfile();
});
</script>

<template>
  <div class="app">
    <nav class="nav"><ProfileAvatar v-if="profile" :name="profile.name" /></nav>
    <main>Контент</main>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  min-height: calc(100vh - 140px);
  gap: 200px;
  max-width: 1450px;
  padding: 140px 120px;
  /* margin: 140px auto 0 auto; */
}
.nav {
  min-width: 400px;
}
</style>
