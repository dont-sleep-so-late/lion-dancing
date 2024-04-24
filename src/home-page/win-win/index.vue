<script lang="ts" setup>
  import Video from '@/components/video/video.vue'
</script>

<template>
  <TnNavbar fixed bg-color="transparent" :bottom-shadow="false" :placeholder="false" />
  <Video />
  <Video />
  <Video />
</template>

<style lang="scss" scoped>
  @import './styles/index.scss';
</style>