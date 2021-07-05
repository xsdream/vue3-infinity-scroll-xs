module.exports = {
  title: "vue3-infinite-scroll-xs", // 顶部左侧标题
  base: "/docs/", // 项目的根路径
  head: [
    // 设置 描述 和 关键词
    // [
    //   "meta",
    //   { name: "keywords", content: "react react-admin ant 后台管理系统" },
    // ],
  ],
  themeConfig: {
    sidebar: {
      // 侧边栏
      "/": [
        {
          text: "介绍",
          children: [
            { text: "安装使用", link: "/" },
            { text: "更新日志", link: "/update" },
            { text: "vue3-infinite-scroll-xs", link: "/infiniteScroll" },
            // { text: "markdown语法", link: "/markdown" },
          ],
        },
      ],
    },
    nav: [
      // 顶部右侧导航栏
      {
        text: "github",
        link: "https://github.com/xsdream/vue3-infinity-scroll-xs",
      },
    ],
  },
};