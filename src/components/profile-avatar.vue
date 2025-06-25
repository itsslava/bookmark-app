<script lang="ts" setup>
const { name } = defineProps<{ name: string }>();
</script>
<template>
  <div class="avatar">
    <img class="avatar_img" src="/public/avatar.png" />
    <div class="avatar_text">
      Hello, <span>{{ name }}!</span>
    </div>
  </div>
</template>
<style scoped>
.avatar {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* сдвигаем всё содержимое к левому краю */
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
