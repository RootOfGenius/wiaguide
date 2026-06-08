const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default {
  logo: (
    <img src={`${basePath}/slogan.png`} alt="World in Audition" style={{ height: '40px' }} />
  ),

  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="World in Audition Game Guideline - Comprehensive guides and resources for World in Audition" />
      <meta name="og:description" content="World in Audition Game Guideline - Comprehensive guides and resources for World in Audition" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="og:title" content="World in Audition Guideline" />
      <meta name="apple-mobile-web-app-title" content="WiA Guideline" />
      <meta name="theme-color" content="#000000" />
      <link rel="icon" href={`${basePath}/favicon.ico`} />
    </>
  ),
  search: {
    placeholder: 'Search documentation...',
  },
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} © World in Audition
      </span>
    ),
  },
  sidebar: {
    defaultMenuCollapseLevel: 2,
  },
  // Mobile-first responsive design via Tailwind
  primaryHue: 220,
  primarySaturation: 100,
  // Enable navigation for better UX
  navigation: true,
  // Enable table of contents
  toc: {
    float: true,
    backToTop: true,
  },
}

