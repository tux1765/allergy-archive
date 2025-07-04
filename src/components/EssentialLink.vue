<template>
  <q-item
    clickable
    tag="a"
    target="_blank"
    :href="item.link"
  >
    <q-item-section
      v-if="item.icon"
      avatar
    >
      <q-icon :name="item.icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ item.title }}</q-item-label>
      <q-item-label caption>{{ item.caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
defineProps({
	item: Object
})
</script>
