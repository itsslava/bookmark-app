<script lang="ts" setup>
import { useRouter } from 'vue-router';
import ButtonText from '../components/button-text.vue';

const router = useRouter();
const redirectToMain = () => {
  router.push('/');
};
</script>
<template>
  <div class="not-found">
    <div class="not-found-form">
      <h1 class="not-found-title">404</h1>
      <ButtonText @click="redirectToMain">Main Page</ButtonText>
    </div>
  </div>
</template>
<style scoped>
.not-found {
  display: grid;
  place-items: center;
  min-height: 100vh;
}
.not-found-form {
  gap: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.not-found-title {
  font-weight: 700;
  font-size: 128px;
}
</style>
