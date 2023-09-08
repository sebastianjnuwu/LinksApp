import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import terser from '@rollup/plugin-terser';
import sveltePreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';
import css from 'rollup-plugin-css-only';
import babel from '@rollup/plugin-babel';
import bash from 'child_process';

const production = !process.env.ROLLUP_WATCH;

function serve() {
  let server;

  function Kill() {
    if (server) server.kill(0);
  }

  return {
    writeBundle() {
      if (server) return;
      server = bash.spawn('npm', ['run', 'start', '--', '--dev'], {
      stdio: ['ignore', 'inherit', 'inherit'],
          shell: false,
        }
      );

      process.on('SIGTERM', Kill);
      process.on('exit', Kill);
    },
  };
};

export default {
  input: 'src/main.ts',
  output: {
    sourcemap: false,
    format: 'iife',
    name: 'app',
    file: 'public/build/bundle.js',
  },
  plugins: [
    svelte({
      preprocess: sveltePreprocess({ sourceMap: false }),
      compilerOptions: {
        dev: false,
      },
    }),
    css({ output: 'bundle.css' }),
    nodeResolve({
      browser: true,
      dedupe: ["svelte"],
      exportConditions: ['node'],
      extensions: ['.svelte', '.ts']
    }),
    babel({ babelHelpers: 'bundled', compact: false }),
    typescript({
      sourceMap: false,
      inlineSources: false,
    }),
    !production && serve(),
    !production && livereload('public'),
     production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};
