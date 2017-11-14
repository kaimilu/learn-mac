module.exports = (router, modelName, actions, prefix, {
  beforeRestfulRoutes,
  afterRestfulRoutes
}) => {
  const modelUrl = `${prefix}/${modelName}`
  const itemUrl = `${prefix}/${modelName}/:id`

  router.get(modelUrl, ...beforeRestfulRoutes, actions.findAll, ...afterRestfulRoutes)
  router.get(itemUrl, ...beforeRestfulRoutes, actions.findById, ...afterRestfulRoutes)
  router.post(modelUrl, ...beforeRestfulRoutes, actions.create, ...afterRestfulRoutes)
}