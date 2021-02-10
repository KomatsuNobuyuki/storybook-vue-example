import path from 'path';

const config = {
  mode: "development",
  entry: './_src/js/index.js',
  output: {
    path: path.resolve(__dirname, './_public'),
    filename: 'js/[name].js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './_public'),
    port: 8080,
    historyApiFallback: false,
  }
};

export default config;