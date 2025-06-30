<script lang="ts" setup>
import BookmarkCard from '@/components/bookmark-card.vue';
import BookmarkSort from '@/components/bookmark-sort.vue';
import CategoryHeader from '@/components/category-header.vue';

import type { Category } from '@/interfaces/category.interface';
import { useBookmarkStore } from '@/stores/bookmark.store';
import { useCategoryStore } from '@/stores/categories.store';

import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const category = ref<Category>();

const route = useRoute();
const categoryStore = useCategoryStore();
const bookmarksStore = useBookmarkStore();

function sortBookmarks(sort: string) {
  bookmarksStore.activeSort = sort;
  if (category.value) {
    bookmarksStore.fetchBookmarks(category.value.id, bookmarksStore.activeSort);
  }
}

onMounted(() => {
  category.value = categoryStore.getCategoryByAlias(route.params.alias);
  if (category.value) {
    bookmarksStore.fetchBookmarks(category.value.id, bookmarksStore.activeSort);
  }
});

watch(
  () => ({ categories: categoryStore.categories, alias: route.params.alias }),
  (data) => {
    category.value = categoryStore.getCategoryByAlias(data.alias);
    if (category.value) {
      bookmarksStore.fetchBookmarks(category.value.id, bookmarksStore.activeSort);
    }
  },
);
</script>

<template>
  <CategoryHeader v-if="category" :category="category" />
  <BookmarkSort :option="bookmarksStore.activeSort" @sort="sortBookmarks" />
  <div v-if="category" class="bookmark-list">
    <BookmarkCard v-for="item in bookmarksStore.bookmarks" :key="item.id" v-bind="item" />
  </div>
</template>

<style scoped>
.bookmark-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 35px;
  row-gap: 15px;

  margin-top: 30px;
}
</style>
