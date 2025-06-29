<script lang="ts" setup>
import ButtonText from '../components/button-text.vue';
import InputString from '@/components/input-string.vue';
import { useAuthStore } from '@/stores/auth.store';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const form = ref<{ email?: string; password?: string }>({});
const authStore = useAuthStore();
const router = useRouter();

watch(
  () => authStore.getToken,
  () => {
    if (authStore.getToken) {
      router.push({ name: 'main' });
    }
  },
);

function submitForm(event: Event) {
  event.preventDefault();
  if (!form.value.email || !form.value.password) {
    return;
  }
  authStore.login(form.value.email, form.value.password);
  // reset form after submission
  form.value = {};
}
</script>
<template>
  <div class="auth">
    <div class="auth-form">
      <h1 class="auth-title">Bookmarkly</h1>
      <form class="auth-form" @submit="submitForm">
        <InputString v-model="form.email" placeholder="Email" />
        <InputString v-model="form.password" placeholder="Password" type="password" />
        <ButtonText type="submit">Log in</ButtonText>
      </form>
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
