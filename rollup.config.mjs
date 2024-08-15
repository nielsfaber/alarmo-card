import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';

const plugins = [
  nodeResolve(),
  typescript(),
  json(),
  babel({
    babelHelpers: 'bundled',
    presets: ['@babel/preset-env'],
  }),
  terser()
];

export default [
  {
    input: 'src/alarmo-card.ts',
    output: {
      dir: 'dist',
      format: 'iife',
      sourcemap: false,
      name: 'AlarmoCard'
    },
    plugins: [...plugins],
    context: 'window'
  },
];
