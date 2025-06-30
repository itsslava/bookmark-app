<script setup lang="ts">
const { option } = defineProps<{ option: string }>();

const SORT_OPTIONS = [
  { option: 'date', name: 'По дате' },
  { option: 'title', name: 'По названию' },
];

const emit = defineEmits<{
  (e: 'sort', option: string): void;
}>();
</script>
<template>
  <div class="sort">
    <button
      class="sort_btn"
      v-for="item in SORT_OPTIONS"
      :key="item.option"
      :class="option == item.option ? 'active' : ''"
      @click="() => emit('sort', item.option)"
    >
      {{ item.name }}
    </button>
  </div>
</template>
<style scoped>
.sort {
  display: flex;
  gap: 10px;
}

.sort_btn {
  font-weight: 400;
  font-size: 16px;
  vertical-align: middle;

  padding: 0;

  border: none;
  background: none;

  cursor: pointer;

  color: var(--color-inactive);
}

.sort_btn.active {
  font-weight: 700;
  color: var(--color-fg);
  border-bottom: 2px solid var(--color-fg);
  padding-bottom: 2px;
}
</style>
