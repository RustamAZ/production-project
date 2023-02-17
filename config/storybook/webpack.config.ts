import path from 'path';
import { RuleSetRule } from 'webpack';
import { WebpackConfiguration } from 'webpack-dev-server';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: {config: WebpackConfiguration}) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config.resolve!.modules!.push(paths.src);
    config.resolve!.extensions!.push('.ts', '.tsx');
    // eslint-disable-next-line no-param-reassign
    config.module!.rules = config.module!.rules!.map((rule: RuleSetRule | any) => {
        if (rule.test instanceof RegExp && rule.test.toString().includes('svg')) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });
    config.module!.rules!.push(buildSvgLoader());
    config.module!.rules!.push(buildCssLoader(true));
    return config;
};
