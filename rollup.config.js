/**
 * Created by wmartin on 5/3/17.
 */
const json = require( 'rollup-plugin-json');
const resolve = require( 'rollup-plugin-node-resolve');
// const babel = require( 'rollup-plugin-babel');
const commonjs = require( 'rollup-plugin-commonjs');
const pkg = require( './package.json');

module.exports = [
  // browser-friendly UMD build
  {
    input: 'lib/demo.js',
    output: {
      name: 'hello-world',
      file: pkg.browser,
      format: 'umd',
      exports: 'named'
    },
    external: [
      'ms',
    ],
    plugins: [
      resolve(), // so Rollup can find `ms`
      commonjs(), // so Rollup can convert `ms` to an ES module
      json()
    ]
  },


  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds = require( a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: 'lib/demo.js',
    external: [
      'ms',
      'readline',
      'assert',
      'stream',
      'tty',
      'util',
      'fs',
      'net',
      'child_process'
    ],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ]
  }
];
