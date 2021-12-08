<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="gulu-popup-overlay" @click="onClickOverlay"></div>
        <div class="gulu-popup">
          <main>
            <slot name="content" />
          </main>
        </div>
    </Teleport>
  </template>
</template>

<script>
import Button from "./Button.vue"

export default {
  props:{
    visible:Boolean
  },
  components:{Button},
  setup(props,context){
    const onClickOverlay = ()=>{
      console.log('props',props)
      console.log('context',context)
      context.emit('update:visible',false)
    }
    return {onClickOverlay}
  }
}
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.gulu-popup {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33.33%;
  min-height: 12em;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
  background: #ffffff;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.3);
    z-index: 10;
  }

  >main {
    padding: 12px 16px;
  }
}
</style>
