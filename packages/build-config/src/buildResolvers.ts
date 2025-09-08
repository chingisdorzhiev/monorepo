import { Configuration } from 'webpack';
import { BuildOptions } from './types.ts/types';

export function buildResolvers(options: BuildOptions): Configuration['resolve'] {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '~': options.paths.src,
      ...options.extraAliases,
    },
  };
}
