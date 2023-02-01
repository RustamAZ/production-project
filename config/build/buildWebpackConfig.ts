import  webpack  from "webpack";
import path from 'path';

import { BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode, isDev} = options;
    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            // rules -- конфигурируем, лоудеры, те файлы 
            // которые выходят за рамки js - png, svg, css, scss и т.д.
            rules: buildLoaders(options)
        },
        // resolve -- отвечает за расшширения файлов, 
        // которые мы не указываем, при импорте компонентов типо 
        // import Component from "./component(нет расширения файла)"
        resolve: buildResolvers(),
        devtool: isDev ? 'inline-source-map' : false,
        devServer: isDev ? buildDevServer(options): undefined

    }
}