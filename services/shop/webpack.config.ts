import path from 'path';
import webpack from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { buildWebpack, BuildMode, BuildPaths, PlatformMode } from '@packages/build-config';
import packageJson from './package.json';

interface EnvVariables {
  mode?: BuildMode;
  port?: number;
  analyser?: boolean;
  platform?: PlatformMode;
}

export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    public: path.resolve(__dirname, 'public'),
  };

  const extraAliases = {
    '~shared': path.resolve(paths.src, 'shared'),
    '~entities': path.resolve(paths.src, 'entities'),
    '~features': path.resolve(paths.src, 'features'),
    '~widgets': path.resolve(paths.src, 'widgets'),
    '~pages': path.resolve(paths.src, 'pages'),
    '~app': path.resolve(paths.src, 'app'),
  };

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3001,
    mode: env.mode ?? 'development',
    paths,
    analyser: env.analyser,
    platform: env.platform ?? 'desktop',
    extraAliases,
  });

  config?.plugins?.push(
    new webpack.container.ModuleFederationPlugin({
      name: 'shop',
      filename: 'remoteEntry.js',
      exposes: {
        './Router': './src/app/routes/AppRoutes.tsx',
      },
      shared: {
        ...packageJson.dependencies,
        react: {
          eager: true,
          singleton: true,
          requiredVersion: packageJson.dependencies['react'],
        },
        'react-router-dom': {
          eager: true,
          singleton: true,
          requiredVersion: packageJson.dependencies['react-router-dom'],
        },
        'react-dom': {
          eager: true,
          singleton: true,
          requiredVersion: packageJson.dependencies['react-dom'],
        },
      },
    }),
  );

  return config;
};
