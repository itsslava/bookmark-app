<script lang="ts" setup>
import type { Category } from '@/interfaces/category.interface';
import { useCategoryStore } from '@/stores/categories.store';

import EditIcon from '@/icons/edit-icon.vue';
import OkIcon from '@/icons/ok-icon.vue';
import DeleteIcon from '@/icons/delete-icon.vue';

import ButtonIcon from './button-icon.vue';
import InputString from './input-string.vue';

import { ref } from 'vue';
import { useRouter } from 'vue-router';

const { category } = defineProps<{ category: Category }>();

const isEdited = ref<boolean>(false);
const newCategoryName = ref<string>(category.name);

const categoryStore = useCategoryStore();
const router = useRouter();

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

function deleteCategory() {
  categoryStore.deleteCategory(category.id);
  // confirm(`Вы уверены, что хотите удалить категорию ${category.name}?`);
  router.replace({ name: 'index' });
}
</script>
<template>
  <div class="category-header">
    <h1 v-if="!isEdited" class="category-header_title">{{ category.name }}</h1>
    <div v-if="isEdited" class="category-header_edit">
      <InputString v-model="newCategoryName" />
      <ButtonIcon @click="updateCategory"><OkIcon /></ButtonIcon>
    </div>
    <div class="category-header_actions">
      <ButtonIcon v-if="!isEdited" @click="toggleEdit"><EditIcon /></ButtonIcon>
      <ButtonIcon @click="deleteCategory"><DeleteIcon width="14" height="14" /></ButtonIcon>
    </div>
  </div>
</template>
<style scoped>
.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.category-header_title {
  font-weight: 500;
  font-size: 24px;
}

.category-header_actions,
.category-header_edit {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
