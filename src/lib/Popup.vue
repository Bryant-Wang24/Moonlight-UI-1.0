<template>
<transition name="popup">
  <div v-if="visible">
    <!-- <Teleport to="body"> -->
      <div class="gulu-popup-overlay" @click="onClickOverlay"></div>
        <div class="gulu-popup">
          <main>
            <slot name="content" />
          </main>
        </div>
    <!-- </Teleport> -->
  </div>
</transition>
  
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
    border: 1px solid red;
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

.popup-enter-active,
.popup-leave-active {
	transition: opacity 0.55s;
}
 
.popup-enter,
.popup-leave-to {
	opacity: 0;
}
.popup-enter-to,.popup-leave{
  opacity: 1;
}
</style>
