<script lang="ts" setup>
const data = defineModel<string>();
</script>
<template><input class="input-string" v-model="data" /></template>
<style scoped>
.input-string {
  border: none;
  border-bottom: 1px solid var(--color-fg);
  min-width: 274px;
  font-size: 24px;
}
.input-string::placeholder {
  color: var(--color-inactive);
}
</style>
