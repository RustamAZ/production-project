import type { Configuration as DevServerConfigurations } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export const buildDevServer = (option: BuildOptions): DevServerConfigurations => ({
    port: option.port,
    open: true,
    historyApiFallback: true,
    hot: true,
});
