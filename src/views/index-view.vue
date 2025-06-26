<template>
  <div class="index">
    <h1 class="index-title">Welcome to Bookmarkly!</h1>
    <p class="index-description">
      To start using the app, select a bookmark category or create a new one.
    </p>
  </div>
</template>

<style scoped>
.index {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  min-height: 50vh;
}

.index-title {
  font-weight: 500;
  font-size: 24px;
}
.index-description {
  font-weight: 400;
  font-size: 16px;
}
</style>
