import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
// import uglify from 'rollup-plugin-uglify';
// import { minify } from 'uglify-es';

export default {
  entry: `src/main.js`,
  dest: `src/build.js`, // output a single application bundle
  sourceMap: false,
  format: 'iife', // for browser settings set format 'iife'
  moduleName: 'main',  // for browser settings uncomment and give
  onwarn: function (warning) {
    console.warn(warning.message);
  },
  plugins: [
    nodeResolve({ jsnext: true, module: true }),
    commonjs({ include: ['node_modules/rxjs/**', 'node_modules/ramda/**'] }),
    // uglify({}, minify)
  ]
};