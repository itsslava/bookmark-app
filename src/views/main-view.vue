<script lang="ts" setup>
import CategoriesList from '../components/categories-list.vue';
import ProfileAvatar from '../components/profile-avatar.vue';
</script>
<template>
  <div class="app">
    <nav class="nav">
      <ProfileAvatar />
      <CategoriesList />
    </nav>
    <main><RouterView /></main>
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
  display: flex;
  flex-direction: column;
  align-items: self-start;
  gap: 36px;
}
</style>
