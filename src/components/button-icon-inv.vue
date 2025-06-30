<script lang="ts" setup></script>
<template>
  <button class="button-icon-inv"><slot /></button>
</template>
<style scoped>
.button-icon-inv {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;

  background: transparent;

  cursor: pointer;

  border: 3px solid var(--color-bg-hover);

  border-radius: 50%;

  transition: all 0.3s;
}

.button-icon-inv:hover {
  background: var(--color-fg-hover);
}
</style>
