<template>
  <router-view />
</template>

<script setup>
import {useFoodStore} from 'stores/store.js'
import {useQuasar} from 'quasar'
import {onBeforeMount, onBeforeUnmount} from 'vue'

const $q = useQuasar()
const foodStore = useFoodStore()

onBeforeMount(() => {
	$q.dark.set(true)
	foodStore.initDb()
})

onBeforeUnmount(() => {
	foodStore.dbSubscription.unsubscribe()
	foodStore.userSubscription.unsubscribe()
})
</script>
