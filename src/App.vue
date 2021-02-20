<template>
  <router-view />
  <Frank/>
</template>

<script lang="ts">
import {ref,provide} from 'vue'
export default {
  name: 'App',
  setup(){
    const menuVisible =ref(false)
    provide('menuVisible',menuVisible)
  }
}
</script>
