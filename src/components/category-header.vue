<script lang="ts" setup>
import type { Category } from '@/interfaces/category.interface';

import EditIcon from '@/icons/edit-icon.vue';
import OkIcon from '@/icons/ok-icon.vue';
import ButtonIcon from './button-icon.vue';
import { ref } from 'vue';
import InputString from './input-string.vue';
import DeleteIcon from '@/icons/delete-icon.vue';
import { useCategoryStore } from '@/stores/categories.store';

const { category } = defineProps<{ category: Category }>();
const isEdited = ref<boolean>(false);
const newCategoryName = ref<string>(category.name);
const categoryStore = useCategoryStore();

function toggleEdit() {
  isEdited.value = !isEdited.value;
}

function updateCategory() {
  if (!newCategoryName.value) {
    return;
  }
  categoryStore.updateCategory(newCategoryName.value, category.alias, category.id);
  toggleEdit();
}
</script>
<template>
  <div class="category-header">
    <h1 v-if="!isEdited" class="category-header_title">{{ category.name }}</h1>
    <div v-if="isEdited">
      <InputString v-model="newCategoryName" />
      <ButtonIcon @click="updateCategory"><OkIcon /></ButtonIcon>
    </div>
    <div>
      <ButtonIcon v-if="!isEdited" @click="toggleEdit"><EditIcon /></ButtonIcon>
      <ButtonIcon><DeleteIcon /></ButtonIcon>
    </div>
  </div>
</template>
<style scoped>
.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.category-header_title {
  font-weight: 500;
  font-size: 24px;
}
</style>
