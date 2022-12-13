module.exports = {
    async generateRoute(post, postId) {        
        let route = post.slug;
        let locale = ''
        
        if (postId) { // we only have an id when editing records, need to query for the locale
            const localeDetail =  
               await strapi.db.query("api::post.post").findOne({
                select: ["locale"],
                where: {
                  id: postId
                }
              })
            
            locale = localeDetail.locale
        } else { 
            locale = post.locale
        }

        // english is the root/default locale and does not need it's own route
        locale = locale === "en" ? "" : `${locale}/`

        let hasParent = post.parentSlug ? true : false
        let parentSlugId = hasParent ? post.parentSlug : null
    
        // loop until the current record does not have a parent (parentSlug property is null/undefined)
        while (hasParent) {
          const parentPost = 
            await strapi.db.query("api::post.post").findOne({
              select: ["id", "slug", "locale"],
              where: {
                id: {
                  $eq: parseInt(parentSlugId),
                },
              },
              populate: {
                parentSlug: {
                  select: ["id", "slug"],
                },
              },
            })
    
          if (parentPost && parentPost.slug) { // post data was returned from query api
            route = `${parentPost.slug}/${route}`
          }
    
          if (parentPost && parentPost.parentSlug) {
            parentSlugId = parentPost.parentSlug.id
    
            hasParent = true
          } else {
            hasParent = false
          }
        }   

        return  `${locale}${route}`
    }
}
