const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      favicon: `./favicon.ico`,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/i,
        use: {
          loader: 'file-loader',
          options: {
            esModule: false,
            name: '[name].[hash].[ext]',
            outputPath: 'imgs',
          },
        },
      },
    ],
  },
};
