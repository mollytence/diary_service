const Router = require('koa-router')
const { HttpException } = require('../../../core/http-exception')

const router = new Router({
  prefix: '/app/v1'
})

router.get('/test', async (ctx, next) => {

})

module.exports = router