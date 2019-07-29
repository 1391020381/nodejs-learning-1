#### z
* [教程](https://xiedaimala.com/tasks/11ad5683-7e18-4883-879d-8425e6a6ceb7/video_tutorials/d044ad5f-102b-4417-821c-015675d104c8)
* 作用
> 在目录之间快速切换
* 用法
```
. ~/.zshrc
z 桌面
```
#### nvm与node安装
[教程](https://xiedaimala.com/tasks/09e02796-29a6-4e4b-90f1-122d4dcdcacc/text_tutorials/7484ad66-f446-4c22-af5d-7ece2f731303)

#### 搭建http服务器
* [code](https://github.com/Hanqing1996/nodejs-learning/blob/master/simple_http_server.js)
* url的组成:
```
Schema://host:port/path?query#hash
```
比如
```
address://putong.shanghai.china/jinkeroad/1111'
```
* but
> 对于‘localhost:8000/user?quan=3&people=china‘
```
const url=req.url; // url='/user?quan=3&people=china'
```
* 为什么url通常看不见port
> 存在默认端口(80,443)
* HTTP方法分类
1. GET 
> 获取某种资源
2. POST
> 新建
3. PATCH
> 修改
4. OPTIONS
> 列举可进行的操作

* HTTP头部组成：
<br>
1. 第一行:方法、路径、协议版本，使用空格分割
```
GET /user HTTP/1.1
```
2. 第二行开始:内容
* HTTP头中常见键值对：
1. Host 指明请求的地址
2. Server 服务器信息
3. Content-Type 请求体的格式,如 xxx/www-url-encoded-form-data application/json
4. Accept: 接受的返回格式
5. Accept-Encoding：接受的请求编码
6. Accept-Language：接受的语言
7. Pragma：兼容http1.0的缓存
8. Cache-Control:缓存策略
9. Via:走过的服务器链路信息
* Response头第一行： 
> 协议 状态码 状态描述 如 HTTP/1.1 200 OK
* 返回码：
2. 2xx 请求成功 200成功 201创建 202接受 203代理 206部分处理
3. 3XX 重定向 302找到，重定向 304未修改
4. 4xx 客户端错误 400请求内容错误 401无权限 403禁止访问 404你懂的
5. 5xx 服务器错误 500服务器炸了 502网关炸了 503炸几分钟 504超时



#### 补充
* 请求体的格式通常由请求头里的content-type指定，可能会很大

#### 流
* 拿到数据时(用桶打水)
```
 req.on('data',function(data){
     requestBodtStr+=data.toString();
     });
```
* 数据全拿到时（桶里的水倒入池子,桶空）
```
 req.on('end',function(){
    const user=JSON.parse(requestBodtStr);
    users.push(user);
    res.statusCode=200;
    res.end(JSON.stringify(user));
    });
```
#### express
* 安装
```
npm i -g express-generator
```
* 生成项目what_i_love
```
express --view=ejs what_i_love
```
* 启动
```
node bin/www
```
* 安装与运行express_demo
初始化npm
```
npm init
```
安装express
```
npm i --save express
```
运行index.js
```
node index.js
```

#### 中间件
[code](https://github.com/Hanqing1996/nodejs-learning/blob/master/express_demo/index.js)
* 定义
对请求流程的封装
* 特点
1. 执行顺序符合代码上下文顺序
2. 最后一个中间件必须有res.end('xx')
