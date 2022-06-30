import AnimatedNumber from './packages/AnimatedNumber'

const version = "0.0.5";
const components = [AnimatedNumber];
const install = (Vue:any,opts = {}) =>{
  //判断是否安装
  //@ts-ignore
  if (install.installed) return;
  components.forEach((component) => {
    console.log(component)
    Vue.component(component.name, component);
  });
}
//@ts-ignore
if (typeof window !== "undefined" && window.Vue) {
  //@ts-ignore
  install(window.Vue);
}

export default { version, install };