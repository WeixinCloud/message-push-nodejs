const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const fs = require('fs')

const PORT = process.env.PORT || 80
const HOST = '0.0.0.0'

const app = express()

app.use(bodyParser.raw())
app.use(bodyParser.json({}))
app.use(bodyParser.urlencoded({ extended: true }))

const client = axios.default

const indexPage = fs.readFileSync('index.html', 'utf-8')

app.get('/', async (req, res) => {
    res.send(indexPage)
})

app.post('/', async (req, res) => {
    // 没有x-wx-source头的，不是微信的来源，不处理
    if (!req.headers['x-wx-source']) {
        res.status(400).send('Invalid request source')
        return
    }
    console.log('==========')
    console.log('收到消息：')
    console.log(req.body)
    console.log('==========')

    // 免鉴权发送消息
    const weixinAPI = `http://api.weixin.qq.com/cgi-bin/message/custom/send`
    const payload = {
        touser: req.headers['x-wx-openid'],
        msgtype: 'text',
        text: {
            content: `云托管接收消息推送成功，内容如下：\n${JSON.stringify(req.body, null, 2)}`
        }
    }
    const result = await client.post(weixinAPI, payload)

    console.log('==========')
    console.log('发送回复结果：')
    console.log(result.data)
    console.log('==========')

    res.send('success')
});

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)