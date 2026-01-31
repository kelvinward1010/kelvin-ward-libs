import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'Kelvinward Libs',
  },
  styles: ['src/styles/tokens.css'],
  outputPath: 'docs-dist',
  resolve: {
    atomDirs: [{ type: 'component', dir: 'src/components' }],
  },
  alias: {
    'kelvinward-libs': '/src',
  },
});
