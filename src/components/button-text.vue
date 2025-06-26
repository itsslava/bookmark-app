<script lang="ts" setup></script>
<template>
  <button class="button"><slot /></button>
</template>
<style scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 40px;

  background-color: var(--color-fg);
  color: var(--color-bg);

  cursor: pointer;

  height: 50px;
  padding: 12px 24px;

  font-weight: 700;
  font-size: 18px;

  transition: all 0.2s;
}
.button:hover {
  background-color: var(--color-fg-hover);
}
</style>
