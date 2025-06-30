<script setup lang="ts">
import type { Bookmark } from '@/interfaces/bookmark.interface';
import ButtonIconInv from './button-icon-inv.vue';
import DeleteIcon from '@/icons/delete-icon.vue';
import LinkIcon from '@/icons/link-icon.vue';
import { useBookmarkStore } from '@/stores/bookmark.store';

const { title, image, url, id, category_id } = defineProps<Bookmark>();
const bookmarkStore = useBookmarkStore();

function openLink() {
  window.open(url, '_blank');
}
</script>
<template>
  <div class="bookmark">
    <div
      class="bookmark_img"
      :style="{
        backgroundImage: `url(${image})`,
      }"
    />
    <h3 class="bookmark_title">
      {{ title }}
    </h3>
    <div class="bookmark_actions">
      <ButtonIconInv @click="bookmarkStore.deleteBookmark(id, category_id)">
        <DeleteIcon width="24" height="24" />
      </ButtonIconInv>
      <ButtonIconInv @click="openLink"><LinkIcon /></ButtonIconInv>
    </div>
  </div>
</template>
<style scoped>
.bookmark {
  display: flex;
  flex-direction: column;
  gap: 24px;

  min-width: 300px;

  padding: 20px;
  border-radius: 30px;

  background: var(--color-fg);
  box-shadow: 0px 10px 10px 0px rgba(245, 245, 247, 0.1);
}

.bookmark_img {
  height: 162px;
  border-radius: 20px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.bookmark_title {
  color: var(--color-bg);
  font-weight: 500;
  font-size: 16px;
}

.bookmark_actions {
  display: flex;
  justify-content: space-between;
}
</style>
