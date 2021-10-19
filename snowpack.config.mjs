// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
export default {
    root: './src/',
  mount: {
    /* ... */
  },
  plugins: [
      '@snowpack/plugin-sass',
      'snowpack-plugin-hash',
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
      out: './dist', // Add docs for github pages
  },
    optimize: {
        bundle: true,
        minify: true,
        target: 'es2018',
        splitting: true
    },
}
