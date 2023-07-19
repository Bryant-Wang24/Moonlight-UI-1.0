<template>
    <div>
        <h1>Popup组件</h1>
        <Demo :component="Popup1Demo" />
        <Demo :component="Popup2Demo" />
    </div>
</template>

<script>
import Demo from "../../components/Demo.vue"
import Popup1Demo from "../../components/popup/Popup1.demo.vue"
import Popup2Demo from "../../components/popup/Popup2.demo.vue"
export default {
    components:{
        Demo
    },
    setup () {
        

        return {Popup1Demo,Popup2Demo}
    }
}
</script>

<style lang="scss" scoped>

</style>