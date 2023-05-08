import { RuleSetRule } from 'webpack';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { BuildOptions } from './types/config';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
    const { isDev } = options;

    const babelLoader = buildBabelLoader(options);

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
