<template>
  <router-view />
</template>

<script setup>
import { getKeys } from 'src/controllers/storage.js'

console.log(getKeys(), 1231235) //
</script>
