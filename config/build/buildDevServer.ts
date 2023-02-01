import { BuildOptions } from './types/config';
import type { Configuration as DevServerConfigurations } from 'webpack-dev-server';

export const buildDevServer = (option: BuildOptions): DevServerConfigurations => {
    return {
        port: option.port,
        open: true,
        historyApiFallback: true,
    }
}