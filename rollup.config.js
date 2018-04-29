import * as fs from 'fs'
import * as R from 'ramda'
import babel from 'rollup-plugin-babel'

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
      babelrc:        false,
      // externalHelpers: true,
      runtimeHelpers: true,
      exclude:        'node_modules/**',
      presets:        [
        [
          'env',
          {
            modules:            false,
            forceAllTransforms: true,
          },
        ],
      ],
      plugins: [
        // 'external-helpers',
        'transform-runtime',
        ...babelrc.plugins,
      ],
    }),
  ],
}

export default config
