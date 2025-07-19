<template>
  <router-view v-if="initialLoadingDone"/>
</template>

<script setup>
import {useFoodStore} from 'stores/store.js'
import {useQuasar} from 'quasar'
import {ref, onBeforeMount, onBeforeUnmount, onMounted} from 'vue'

const $q = useQuasar()
const foodStore = useFoodStore()

onBeforeMount(() => {
	$q.dark.set(true)
})

const initialLoadingDone = ref(false)
onMounted(async () => {
	await foodStore.initDb()
	initialLoadingDone.value = true
})

onBeforeUnmount(() => {
	foodStore.dbSubscription.unsubscribe()
	foodStore.userSubscription.unsubscribe()
})
</script>
