import { Config } from '@stencil/core';
import commonjs from 'rollup-plugin-commonjs';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import resolvePlugin from 'rollup-plugin-node-polyfills';

export const config: Config = {
  namespace: 'manotr-timeline',
  taskQueue: 'async',
  commonjs: {
    namedExports: {
      'raf': ['requestAnimationFrame']
    }
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ], rollupPlugins: {
    before: [
      // Plugins injected before rollupNodeResolve()
      resolvePlugin()
    ],
    after: [
      // Plugins injected after commonjs()
      nodePolyfills()
    ]
  }
};
