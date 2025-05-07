import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types.ts/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshTypeScript from "react-refresh-typescript";

export function buildLoaders(options: BuildOptions): ModuleOptions["rules"] {
  const isDev = options.mode === "development";

  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: "asset/resource",
  };

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [{ loader: "@svgr/webpack", options: { icon: true } }],
  };

  const cssLoaderWithModules = {
    loader: "css-loader",
    options: {
      modules: {
        auto: /\.module\./,
        localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
      },
    },
  };

  const cssLoader = {
    test: /\.css$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      cssLoaderWithModules,
    ],
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: [
      {
        loader: "ts-loader",
        options: {
          // Отменяет проверку типов (только транспиляция ts-кода)
          transpileOnly: isDev,
          getCustomTransformers: () => ({
            before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
          }),
        },
      },
    ],
    exclude: /node_modules/,
  };

  return [svgLoader, assetLoader, cssLoader, tsLoader];
}
