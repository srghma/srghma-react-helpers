import * as fs from 'fs'
import * as R from 'ramda'
import babel from 'rollup-plugin-babel'

// XXX:
// its required that peers were installed before running build,
// because babel-plugin-lodash will not be able to make right paths then
// use `npm run prepare` to install them

const pkg = require('./package.json')

const babelrc = JSON.parse(fs.readFileSync('./.babelrc'))
const banner = `// ${pkg.name} v${pkg.version}`
const peerDependenciesRegex = R.pipe(R.keys, R.join('|'))(pkg.peerDependencies)

const config = {
  input:  'src/index.js',
  banner,
  name:   pkg.name,
  output: [
    {
      file:      pkg.main,
      format:    'cjs',
      sourcemap: true,
    },
    {
      file:      pkg.module,
      format:    'es',
      sourcemap: true,
    },
  ],
  external: id => id.match(peerDependenciesRegex),
  plugins:  [
    babel({
      babelrc:         false,
      externalHelpers: true,
      // runtimeHelpers: true,
      exclude:         'node_modules/**',
      presets:         [
        [
          '@babel/env',
          {
            modules:            false,
            forceAllTransforms: true,
          },
        ],
      ],
      plugins: [
        '@babel/plugin-external-helpers',
        // 'transform-runtime',
        ...babelrc.plugins,
      ],
    }),
  ],
}

export default config
