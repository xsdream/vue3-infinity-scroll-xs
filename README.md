**无缝滚动插件**

## 安装

`npm i vue3-infinite-scroll-xs`

`cnpm i vue3-infinite-scroll-xs`

## 使用

```
  import doron from 'vue3-infinite-scroll-xs'
  app.use(doron)
```

## 引入样式
`import 'vue3-infinite-scroll-xs/dist/vue3-infinite-scroll-xs.css';`


## 局部引入



优点：
1. 纯css实现，比js无缝滚动插件性能好
2. 支持vue3
3. 速度可控
4. 完美支持click事件，不会出现类似于seamless因为一半是复制节点而导致不触发click事件

缺点：
1. 只支持从下往上（后续考虑增加其他方向）
2. 不支持无缝滚动最小数据长度，**当数据量低于容器高度时不滚动**
3. 暂不支持单个停止


  key|描述|默认值|val
  ---|:--:|---:|---:
  resData|滚动数据内容|[]|Array
  deep|滚动速度|10(0~10之间)|value