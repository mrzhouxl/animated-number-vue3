# animated-number-vue3

![预览](https://oss.tuyashe.top/o_1g6ng2ptqtge44rmk51903aka.gif)

## 安装

```bash
$ npm install animated-number-vue3
# OR
$ yarn add animated-number-vue3
```

```vue
开始
import AnimatedNumber from 'animated-number-vue3'
app.use(AnimatedNumber)

<AnimatedNumber :from="0" :to="1000"></AnimatedNumber>
----------------------
<AnimatedNumber :from="0" :to="1000">
  <template #default="{ option, item }">
    <h1>{{ item.number }}</h1>
  </template>
</AnimatedNumber>
也可使用插槽来自定义界面等操作，option为整个动效包含内容的对象，item里面包含变动的数字，当from和to传的是一个数字时，为单数字动效，此时值必须为number

如果想一次性为多个数字做动效，此插件也提供插槽来自定义
<AnimatedNumber :from="{
  number1:0,
  number2:0
}" :to="{
  number1:100,
  number2:100
}">
  <template #default="{ option, item }">
    <h1>{{ item.number1 }}</h1>
    <h1>{{ item.number2 }}</h1>
  </template>
</AnimatedNumber>

from和to的对象key必须为一样，一个开始一个结束的值
```

## Props

组件的props定义


| Prop Name           | Type   | Description                                                                                                |
| ------------------- | ------ | ---------------------------------------------------------------------------------------------------------- |
| type                | String | 默认为single multiple                                                                                      |
| to                  | Number | 动效结束完的值，默认为0                                                                                    |
| from                | Number | 动效初始化的值，默认为0                                                                                    |
| round  | Number | 默认为1                                                                        |
| easing | String | 默认为linear
| duration | Number |动效时间 默认1000
|options|Number|扩展，依赖于animejs


[github](https://github.com/mrzhouxl/animated-number-vue3)