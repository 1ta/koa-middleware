import convert from 'koa-convert'

const makeConvert = function(old){
  return function(){
    let m = old.apply(this,arguments)
    return convert(m)
  }
}

import koaCompress from 'koa-compress'
export const compress = makeConvert(koaCompress)
import koaFresh from 'koa-fresh'
export const fresh = makeConvert(koaFresh)
import koaEtag from 'koa-etag'
export const etag = makeConvert(koaEtag)
import koaResponseTime from 'koa-response-time'
export const responseTime = makeConvert(koaResponseTime)
import koaFavicon from 'koa-favicon'
export const favicon = makeConvert(koaFavicon)
import koaCors from 'kcors'
export const cors = makeConvert(koaCors)
import koaStatic from 'koa-static'
export const statics = makeConvert(koaStatic)
import koaBody from 'koa-body'
export const parseBody = makeConvert(koaBody)
