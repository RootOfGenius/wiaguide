import nextra from 'nextra'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
const isGitHubPages = process.env.DEPLOY_TARGET === 'github-pages'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
})

export default withNextra({
  reactStrictMode: true,
  trailingSlash: true,
  ...(isGitHubPages
    ? {
        output: 'export',
        basePath,
        assetPrefix: `${basePath}/`,
        images: {
          unoptimized: true,
        },
      }
    : {}),
})
