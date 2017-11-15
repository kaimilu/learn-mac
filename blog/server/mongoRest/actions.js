module.exports = function generateActions(model) {
  return {
    // 查找所有
    findAll: async function(ctx, next) {
      try {
        let conditions = {}
        let select = {}
        let query = ctx.request.query
        if (query.conditions) {
          conditions = JSON.parse(query.conditions)
        }
        let builder = model.find(conditions)
        if (query.select) {
          select = JSON.parse(query.select)
          builder = builder.select(select)
        }

        ['limit', 'skip', 'sort', 'count'].forEach(key => {
          if (query[key]) {
            let arg = query[key]
            if (key === 'limit' || key === 'skip') {
              arg = parseInt(arg)
            }
            if (key === 'sort' && typeof arg === 'string') {
              arg = JSON.parse(arg)
            }
            if (key !== 'count') builder[key](arg)
            else builder[key]()
          }
        })
        const result = await builder.exec()
        return ctx.body = result
      } catch (error) {
        return ctx.body = error
      }
    },
    // 查找
    findById: async function(ctx, next) {
      try {
        let select = {}
        let query = ctx.request.query
        let builder = model.findById(ctx.params.id)
        if (query.select) {
          select = JSON.parse(query.select)
          builder = builder.select(select)
        }
        const result = await builder.exec()

        return ctx.body = result
      } catch (error) {
        return ctx.body = error
      }
    },
    // 删除
    deleteById: async function(ctx,next) {
      try {
        const result = await model.findByIdAndRemove(ctx.params.id)
        return ctx.body = result
      } catch (error) {
        return ctx.body = error
      }
    },
    // 替换
    replaceById: async function(ctx, next) {
      try {
        await model.findByIdAndRemove(ctx.params.id).exec()
        const newDocument = ctx.request.body
        newDocument._id = ctx.params.id
        const result = await model.create(newDocument)
        return ctx.body = result
      } catch (error) {
        return ctx.body = error
      }
    },
    // 更新
    updateById: async function(ctx, next) {
      try {
        const result = await model.findByIdAndUpdate(
          ctx.params.id,
          ctx.request.body,
          {
            new: true
          }
        ).exec()
        return ctx.body = result
      } catch (error) {
        return ctx.body = error
      }
    },

    // 创建
    create: async function(ctx, next) {
      try {
        const result = await model.create(ctx.request.body)
        ctx.status = 201
        return ctx.body = result
      } catch (error) {
        return ctx.body = error
      }
    }
   
  }

  
}