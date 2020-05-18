module.exports = {
  amp: true,

  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/blog/one': { page: '/post', params: { post: 'one' } },
      '/blog/two': { page: '/post', params: { post: 'two' } },
      '/blog/three': { page: '/post', params: { post: 'three' } }
    }
  }
}
