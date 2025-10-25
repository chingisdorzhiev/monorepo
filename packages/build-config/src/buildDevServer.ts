import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types.ts/types';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port ?? 3000,
    open: true,
    hot: true,

    // работает только для дев-сервера
    historyApiFallback: true,
  };
}
