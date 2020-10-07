module.exports = {

    basePath: `/`,

    collections: [{
        path: `/`,
        selector: node => node.author && node.author.slug === `fakepilot`,
    }],
}