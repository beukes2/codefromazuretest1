const { generateRoute } = require("./route")

module.exports = {
  async beforeCreate(event) {
    const postData = event.params.data
    const route = await generateRoute(postData)

    event.params.data.route = route
  },
  async beforeUpdate(event) {
    const { data:post, where:postId } = event.params
    const route = await generateRoute(post, parseInt(postId.id))

    if (!route.includes('undefined')) { // doing this for localization, to only update the route for the particular localization that was altered
      event.params.data.route = route
    }
  }
}
