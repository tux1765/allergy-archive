<template>
  <router-view />
</template>

<script setup>
import { testPlugin } from 'src/services/db.js'
import {onMounted} from 'vue'

onMounted(() => {
	testPlugin()
})
</script>
