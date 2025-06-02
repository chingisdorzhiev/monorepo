import path from 'path';
import webpack from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { buildWebpack } from '@packages/build-config';
import { BuildMode, BuildPaths, PlatformMode } from '@packages/build-config';
import packageJson from './package.json';

interface EnvVariables {
  mode?: BuildMode;
  port?: number;
  analyser?: boolean;
  platform?: PlatformMode;
  SHOP_REMOTE_URL?: string;
  ADMIN_REMOTE_URL?: string;
}

export default (env: EnvVariables) => {
  const SHOP_REMOTE_URL = env.SHOP_REMOTE_URL ?? 'http://localhost:3001';

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    public: path.resolve(__dirname, 'public'),
  };

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths,
    analyser: env.analyser,
    platform: env.platform ?? 'desktop',
  });

  config.plugins.push(
    new webpack.container.ModuleFederationPlugin({
      name: 'host',
      filename: 'remoteEntry.js',

      remotes: {
        shop: `shop@${SHOP_REMOTE_URL}/remoteEntry.js`,
      },
      shared: {
        ...packageJson.dependencies,
        react: {
          eager: true,
          // requiredVersion: packageJson.dependencies["react"],
        },
        'react-router-dom': {
          eager: true,
          // requiredVersion: packageJson.dependencies["react-router-dom"],
        },
        'react-dom': {
          eager: true,
          // requiredVersion: packageJson.dependencies["react-dom"],
        },
      },
    }),
  );

  return config;
};
