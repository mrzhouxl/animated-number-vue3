import AnimatedNumber from './AnimatedNumber.vue'

AnimatedNumber.install = (Vue:any) => {
  Vue.component(AnimatedNumber.name,AnimatedNumber);
}

export default AnimatedNumber