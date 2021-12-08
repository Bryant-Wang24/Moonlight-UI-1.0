<demo>
常规使用
</demo>
<template>
    <div>
        <Button @click="toggle">展示弹出层</Button>
        <Popup :visible="x" @update:visible="x=$event">
          <template v-slot:content>
            <div>内容1</div>
            <div>内容2</div>
            <div>内容3</div>
          </template>
        </Popup>
    </div>
</template>

<script lang="ts">
import {Button,Popup} from "../lib/index"
import {ref} from "vue";
export default {
  components: {Popup,Button},
  setup () {
      const x = ref(false)
        const toggle = ()=>{
          console.log(x.value)
          x.value = !x.value
        }

        return {Button,Popup,toggle,x}
    }
}
</script>

<style lang="scss" scoped>

</style>
