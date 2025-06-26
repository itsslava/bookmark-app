<script lang="ts" setup>
import { useCategoryStore } from '@/stores/categories.store';
import { onMounted } from 'vue';
import ButtonIcon from './button-icon.vue';
import PlusIcon from '@/icons/plus-icon.vue';

const store = useCategoryStore();

onMounted(() => {
  store.fetchCategories();
});
</script>
<template>
  <ul class="category-list">
    <li class="category-list_item" v-for="item in store.categories" :key="item.id">
      <RouterLink active-class="active-link" :to="`/main/${item.alias}`">{{
        item.name
      }}</RouterLink>
    </li>
    <li>
      <ButtonIcon @click="store.createCategory"><PlusIcon /></ButtonIcon>
    </li>
  </ul>
</template>
<style scoped>
.category-list {
  display: flex;
  flex-direction: column;
  gap: 34px;
  margin: 0;
  padding: 0;
}

.category-list li {
  list-style: none;
  font-size: 14px;
}

.category-list_item a {
  text-decoration: none;
  color: var(--color-fg);
  transition: all 0.5s;
}
.active-link {
  font-weight: 700;
  font-size: 24px;
}
.category-list_item a:hover {
  font-weight: 700;
  font-size: 24px;
}
</style>
