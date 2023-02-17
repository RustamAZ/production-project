export const buildSvgLoader = () => ({
    test: /\.svg$/,
    use: [{
        loader: '@svgr/webpack',
    }],
}
);
