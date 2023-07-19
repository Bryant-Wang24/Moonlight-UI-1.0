<template>
  <h1>Tabs 示例</h1>
  <Demo :component="Tabs1Demo" />
</template>

<script lang="ts">
import Demo from "../../components/Demo.vue"
import Tabs1Demo from '../../components/tab/Tabs1.demo.vue'
export default {
  components: {
    Demo
  },
  setup() {
    return {
      Tabs1Demo
    }
  }
}
</script>