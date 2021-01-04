import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import babel from '@rollup/plugin-babel';
import pkg from './package.json';

export default {
  input: 'components/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  external: ['react', 'styled-components'],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true,
    }),
    babel({
      babelrc: false,
      extensions: ['.js', '.ts', '.tsx'],
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
      presets: ['@babel/preset-react', '@babel/preset-env'],
      plugins: [
        [
          'babel-plugin-styled-components',
          {
            pure: true,
          },
        ],
      ],
    }),
  ],
};
