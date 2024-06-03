<template>
  <div ref="number">
    <slot :option="option" :item="option.targets">
      {{ option.targets.number }}
    </slot>
  </div>
</template>
<script lang="ts">
export default defineComponent({
  name: "AnimatedNumber"
})
</script>
<script setup lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import anime from "animejs"

let props = defineProps({
  type: {
    type: String,
    default: 'single'
  },
  to: {
    type: [String, Number],
    default: 0
  },
  from: {
    type: [String, Number],
    default: 0
  },
  round: {
    type: Number,
    default: 1
  },
  easing: {
    type: String,
    default: 'linear'
  },
  disableUpdate: {
    type: Boolean,
    default: false
  },
  duration: {
    type: Number,
    default: 1000
  },
  options: {
    type: Object,
    default: {}
  }
})
let to = {
  number: props.to
}
let from = {
  number: props.from
}

let option = ref<any>({
  targets: {
    number:props.from
  },
  easing: props.easing,
  round: props.round,
  duration: props.duration,
  ...props.options
})
onMounted(() => {
  init();
})

const init = () => {
  if (props.type === 'multiple') {
    option.value.targets = props.from;
    option.value = Object.assign(option.value, props.to)
  } else {
    if(typeof props.to === 'object' && typeof props.from === 'object'){
      console.error('Type is not multiple,To and from must be number');
      return;
    }
    option.value.targets = from;
    option.value = Object.assign(option.value, to)
  }
  anime(option.value);
}

//手动动画
const play = () => {
  init()
}

</script>
<style scoped>
</style>