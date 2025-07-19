<template>
  <router-view v-if="initialLoading"/>
</template>

<script setup>
import {useFoodStore} from 'stores/store.js'
import {useQuasar} from 'quasar'
import {onBeforeMount, onBeforeUnmount, onMounted, ref} from 'vue'

const $q = useQuasar()
const foodStore = useFoodStore()

const initialLoading = ref(false)

onBeforeMount(() => {
	$q.dark.set(true)
})

onMounted(async () => {
	await foodStore.initDb()
	initialLoading.value = true
})

onBeforeUnmount(() => {
	foodStore.dbSubscription?.unsubscribe()
	foodStore.userSubscription?.unsubscribe()
})
</script>
