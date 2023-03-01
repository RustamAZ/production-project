import { RuleSetRule } from 'webpack';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
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
    const svgloader = buildSvgLoader();

    // Если не используем тайпскрипт - нужен babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/, // регулярное выражениее по расширению файла
        use: 'ts-loader', // loader название
        exclude: /node_modules/, // эсключение нод модули нам не нужны
    };

    const cssloader = buildCssLoader(isDev);

    const fontLoader = {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
    };

    return [
        fileloader,
        svgloader,
        babelLoader,
        typescriptLoader,
        cssloader, fontLoader];
};
