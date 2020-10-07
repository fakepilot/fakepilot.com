module.exports = {

    basePath: `/`,

    collections: [{
        path: `/`,
        selector: node => node.primary_author && node.primary_author.slug === `fakepilot`,
    }],
}