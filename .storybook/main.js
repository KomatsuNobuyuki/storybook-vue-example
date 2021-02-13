module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  /**
   * storybookで使用されているwebpakcのデフォルトのコンフィングには、sassをコンパイルするローダーの設定がないので、追加する
   * @link https://storybook.js.org/docs/react/configure/webpack#extending-storybooks-webpack-config
   */
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push(
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          }
        ]
      }
    );
    return config;
  }
}