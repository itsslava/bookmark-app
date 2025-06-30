<script lang="ts" setup>
import CategoryList from '../components/category-list.vue';
import ProfileAvatar from '../components/profile-avatar.vue';
</script>
<template>
  <div class="app">
    <nav class="nav">
      <ProfileAvatar />
      <CategoryList />
    </nav>
    <main class="main"><RouterView /></main>
  </div>
</template>
<style scoped>
.app {
  display: flex;
  min-height: calc(100vh - 140px);
  /* gap: 200px; */
  max-width: 1450px;
  padding: 40px;
}
.nav {
  min-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: self-start;
  gap: 36px;
}

.main {
  width: 100%;
}
</style>
