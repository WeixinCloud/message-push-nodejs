# 微信云托管·云调用示例（Node.js）

[![GitHub license](https://img.shields.io/github/license/WeixinCloud/message-push-nodejs)](https://github.com/WeixinCloud/message-push-nodejs)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/WeixinCloud/message-push-nodejs/express)

微信云托管·云调用示例，基于 Node.js Express 框架搭建，实现小程序、公众号简易的接收、回复消息功能。

![](https://qcloudimg.tencent-cloud.cn/raw/21068367f6757057a9125458be3347d4.png)

## 什么是云调用？
云调用是具有「免鉴权调用微信开放服务接口」特性的能力，是云托管中微信生态的一部分。

在云调用出现之前，微信开放服务接口的正常调用，需要开发者使用密钥信息获取access_token，并自己维护token的有效期和安全。而获取access_token，涉及到密钥交互请求，容易暴漏密钥导致被盗用，对开发者和微信服务都有消极的影响。

云调用主要打造免鉴权，也就是免密钥，全程不暴漏任何信息，开发者无需维护access_token，那对于接口请求的合法性判定，完全由与微信同链路的微信云托管参与实施。

更多请参考文档：[云调用&微信令牌](https://developers.weixin.qq.com/miniprogram/dev/wxcloudrun/src/guide/weixin/token.html)

## 快速开始
前往 [微信云托管快速开始页面](https://cloud.weixin.qq.com/cloudrun/onekey)，选择相应语言的模板，根据引导完成部署。

## 本地调试
下载代码在本地调试，请参考[微信云托管本地调试指南](https://developers.weixin.qq.com/miniprogram/dev/wxcloudrun/src/guide/debug/)

## 实时开发
代码变动时，不需要重新构建和启动容器，即可查看变动后的效果。请参考[微信云托管实时开发指南](https://developers.weixin.qq.com/miniprogram/dev/wxcloudrun/src/guide/debug/dev.html)

## Dockerfile最佳实践
请参考[如何提高项目构建效率](https://developers.weixin.qq.com/miniprogram/dev/wxcloudrun/src/scene/build/speed.html)

## 项目结构说明

```
.
├── Dockerfile
├── README.md
├── index.js
├── package.json
```

- `index.js`：项目入口，实现简易的接收、回复消息功能
- `package.json`：Node.js 项目定义文件
- `Dockerfile`：容器配置文件
- `container.config.json`：模板部署「服务设置」初始化配置（二开请忽略）

## 服务 API 文档

### `POST /`

接收来自微信的消息推送，消息结构可参考 [微信文档](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/customer-message/receive.html#%E6%96%87%E6%9C%AC%E6%B6%88%E6%81%AF)。

接收消息后，将会调用 [发送客户消息](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/customer-message/customerServiceMessage.send.html) 接口，返回收到的消息详情。

## License

[MIT](./LICENSE)
