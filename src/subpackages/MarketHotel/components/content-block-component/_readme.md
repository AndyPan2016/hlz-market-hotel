
# 内容块组件（content-block-component）

# 使用
## 1.导入组件
`import ContentBlockComponent from '@/components/content-block-component/index'`
## 2.声明组件
`components = {`  
`    'content-block': ContentBlockComponent`
`}`
## 3.使用组件
`<content-block title='分隔线自定义文本' background='背景颜色（默认为白色）'>`
`    <view slot='slot-content'>自定义内容插槽</view>`
`</content-block>`
