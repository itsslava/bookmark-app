<script lang="ts" setup>
import { useProfileStore } from '@/stores/profile.store';
import { onMounted } from 'vue';

const store = useProfileStore();

onMounted(() => {
  store.fetchProfile();
});
</script>
<template>
  <div class="avatar" v-if="store.profile">
    <img class="avatar_img" src="/public/avatar.png" />
    <div class="avatar_text">
      Hello, <span>{{ store.profile.name }}!</span>
    </div>
  </div>
</template>
<style scoped>
.avatar {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  text-align: left;
}
.avatar_img {
  width: 80px;
  height: 80px;
}
.avatar_text {
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 2%;
  text-align: left;
}
.avatar_text span {
  font-weight: 700;
}
</style>
