module.exports = {

    basePath: `/`,

    collections: [{
        path: `fakepilot`,
        selector: node => node.primary_author && node.primary_author.slug === `fake pilot`,
    }],
}