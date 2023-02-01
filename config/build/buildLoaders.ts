import MiniCssExtractPlugin  from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';
import { RuleSetRule } from 'webpack';

export const buildLoaders = (option: BuildOptions): RuleSetRule[] => {
    const {isDev} = option;
    // Если не используем тайпскрипт - нужен babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/, // регулярное выражениее по расширению файла 
        use: 'ts-loader', // loader название 
        exclude: /node_modules/, // эсключение нод модули нам не нужны
    }

    const cssloader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: ((resourcePath: string) => Boolean(resourcePath.includes('.module.'))),
                        localIdentName: isDev
                            ? '[path][name]__[local]'
                            : 'hash:base64:8'
                    }
                }
            },
            "sass-loader",
        ],

      }

    return [typescriptLoader, cssloader]
}