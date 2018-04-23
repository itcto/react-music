# React-Music（开发中...）
> api：一个开源的[网易云音乐 NodeJS 版 API](https://binaryify.github.io/NeteaseCloudMusicApi)（有api才有动力写！！！）

## 如何安装与使用

## 技术栈

- React（核心框架）
- React-Router（页面路由）
- ES 6 / 7
- Less（CSS预处理器）
- Axios（网络请求）
- [Better-Scroll](https://ustbhuangyi.github.io/better-scroll/#/zh)（一款重点解决移动端各种滚动场景需求的插件）
- FastClick（解决移动端300ms点击延迟）

## 项目布局

```
├── config                                          // webpack配置文件
├── public                                          // 项目启动页面
├── scripts                                         // 脚本工具
├── screenshots                                     // 项目截图
├── server                                          // 后台服务器目录
├── src                                             // 项目源码目录
│   ├── api                                         // 数据交互目录
│   │   └── index.js                                // 获取数据
│   ├── assets                                      // 资源目录
│   │   ├── css                                     // 数据交互目录
│   │   │   └── index.less                          // 基础样式
│   │   │   ├── mixin.less                          // 样式混合
│   │   │   └── reset.css                           // 样式重置
│   │   ├── img                                     // 图片
│   ├── base                                        // 公共基础组件目录
│   │   ├── scroll
│   │   │   └── scroll.js                           // 
│   │   ├── slide
│   │   │   └── slide.js                            // 轮播组件
│   ├── common                                      //
│   ├── components                                  // 公共项目组件目录
│   │   ├── lcr-list
│   │   │   └── lcr-list                            // 列表组件（三列）
│   ├── pages                                       //
│   │   ├── find
│   │   │   └── find.js                             //
│   │   ├── my
│   │   │   └── my.js                               // 
│   │   ├── recommend
│   │   │   └── recommend.js                        // 
│   │   ├── app.js                                  // 
│   │   ├── app.less                                // 
│   ├── router
│   │   └── index.js                                // 路由配置
│   └── index.js                                    // 入口主文件
```

## 功能

## 界面欣赏

## 更新说明

## License

[MIT](https://github.com/maomao1996/Vue-mmPlayer/blob/master/LICENSE)
