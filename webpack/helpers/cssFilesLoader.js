import postcssImport from 'postcss-smart-import';
import postnext from 'postcss-cssnext';

const cssFilesLoader = {
  test: /\.(css|scss)$/i,
  use: [
    {
      loader: 'style-loader',
      options: {
        sourceMap: true,
      },
    },
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: true,
        plugins: [
          postcssImport,
          postnext,
        ],
      },
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true,
      },
    },
  ],
};

export default cssFilesLoader;
