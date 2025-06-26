<script lang="ts" setup>
import { useRouter } from 'vue-router';
import ButtonText from '../components/button-text.vue';

const router = useRouter();
const redirectToMain = () => {
  router.push({ name: 'main' });
};
</script>
<template>
  <div class="auth">
    <div class="auth-form">
      <h1 class="auth-title">Bookmarkly</h1>
      <ButtonText @click="redirectToMain">Log in</ButtonText>
    </div>
  </div>
</template>
<style scoped>
.auth {
  display: grid;
  place-items: center;
  min-height: 100vh;
}
.auth-title {
  font-weight: 700;
  font-size: 52px;
}

.auth-form {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 52px;
}
</style>
