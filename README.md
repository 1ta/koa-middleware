# koa-middleware
[DEPRECATED] Replaced by (koa-middleware-package)[https://github.com/1ta/koa-middleware-package]
This is a [koa2](https://github.com/koajs/koa/tree/v2.x) middleware collection
which use [koa-convert](https://github.com/gyson/koa-convert) to convert a koa1
middleware into a koa2 one if needed.  

##middleware list
- [parseBody](https://github.com/dlau/koa-body)
- [statics](https://github.com/koajs/static)
- [cors](https://github.com/koajs/cors)
- [favicon](https://github.com/koajs/favicon)
- [responseTime](https://github.com/koajs/response-time)
- [etag](https://github.com/koajs/etag)
- [fresh](https://github.com/koajs/koa-fresh)
- [compress](https://github.com/koajs/compress)


##Usage

es2015:  
```
import {cors, favicon} from 'koa-middleware'
app.use(cors())
app.use(favicon('path/to/favicon'))
```

es5:
```
const middlewares = require('koa-middleware')
const cors = middlewares.cors
const favicon = middlewares.favicon
app.use(cors())
app.use(favicon('path/to/favicon'))
```
