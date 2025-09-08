export interface BuildPaths {
  entry: string;
  output: string;
  html: string;
  src: string;
  public: string;
}

export type BuildMode = 'production' | 'development';
export type PlatformMode = 'mobile' | 'desktop';

export interface BuildOptions {
  port: number;
  paths: BuildPaths;
  mode: BuildMode;
  analyser?: boolean;
  platform: PlatformMode;
  extraAliases?: Record<string, string>;
}
