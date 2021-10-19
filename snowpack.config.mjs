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
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
      out: './dist',
  },
    optimize: {
        bundle: true,
        minify: true,
        target: 'es2018',
        splitting: true
    },
}
