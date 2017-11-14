module.exports = function generateActions(model) {
  return {
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
    }
  }
}