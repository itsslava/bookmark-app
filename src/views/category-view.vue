<script lang="ts" setup>
import CategoryHeader from '@/components/category-header.vue';
import type { Category } from '@/interfaces/category.interface';
import { useBookmarkStore } from '@/stores/bookmark.store';
import { useCategoryStore } from '@/stores/categories.store';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const category = ref<Category>();

const categoryStore = useCategoryStore();
const bookmarksStore = useBookmarkStore();

onMounted(() => {
  category.value = categoryStore.getCategoryByAlias(route.params.alias);
  if (category.value) {
    bookmarksStore.fetchBookmarks(category.value.id);
  }
});

watch(
  () => ({ categories: categoryStore.categories, alias: route.params.alias }),
  (data) => {
    category.value = categoryStore.getCategoryByAlias(data.alias);
    if (category.value) {
      bookmarksStore.fetchBookmarks(category.value.id);
    }
  },
);
</script>

<template><CategoryHeader v-if="category" :category="category" /></template>
