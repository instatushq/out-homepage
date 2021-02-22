const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? 'https://out.instatus.com/out' : '',
  basePath: isProd ? '/out' : '',
  async redirects() {
    return [
      {
        source: '/download/mac',
        destination: 'https://github.com/instatushq/out/suites/2092358104/artifacts/42442727',
        permanent: false,
      },
      {
        source: '/download/windows',
        destination: 'https://github.com/instatushq/out/suites/2092358104/artifacts/42442728',
        permanent: false,
      },
      {
        source: '/download/linux',
        destination: 'https://github.com/instatushq/out/suites/2092358104/artifacts/42442726',
        permanent: false,
      }
    ]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};
