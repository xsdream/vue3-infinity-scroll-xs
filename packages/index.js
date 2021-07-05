
import infiniteScroll from './infiniteScroll.vue' // 导入组件
import './theme-style/index.scss' // 导入样式

infiniteScroll.install = app => {
  // 组件install属性
  app.component(infiniteScroll.name, infiniteScroll) // 定义组件-vue3的写法
}

export default infiniteScroll // 默认导出