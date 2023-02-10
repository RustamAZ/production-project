import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';

export const buildLoaders = (option: BuildOptions): RuleSetRule[] => {
    const { isDev } = option;

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true,
                        },
                    ],
                ],
            },
        },
    };

    // file - png,jpeg,jpg,gif,woff ...
    const fileloader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    // svg
    const svgloader = {
        test: /\.svg$/,
        use: [{
            loader: '@svgr/webpack',
        }],
    };

    // Если не используем тайпскрипт - нужен babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/, // регулярное выражениее по расширению файла
        use: 'ts-loader', // loader название
        exclude: /node_modules/, // эсключение нод модули нам не нужны
    };

    const cssloader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: ((resourcePath: string) => Boolean(resourcePath.includes('.module.'))),
                        localIdentName: isDev
                            ? '[path][name]__[local]'
                            : 'hash:base64:8',
                    },
                },
            },
            'sass-loader',
        ],

    };

    return [
        fileloader,
        svgloader,
        babelLoader,
        typescriptLoader,
        cssloader];
};
