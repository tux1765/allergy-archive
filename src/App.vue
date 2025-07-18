<template>
  <router-view />
</template>

<script setup>
import {useFoodStore} from 'stores/store.js'
import {onBeforeMount, onBeforeUnmount} from 'vue'

const foodStore = useFoodStore()
onBeforeMount(() => {
	foodStore.initDb()
})

onBeforeUnmount(() => {
	foodStore.dbSubscription.unsubscribe()
	foodStore.userSubscription.unsubscribe()
})
</script>
