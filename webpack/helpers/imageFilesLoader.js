const imageFilesLoader = {
  test: /\.(jpe?g|png|gif|svg)$/i,
  use: [
    'url-loader?limit=10000',
    'img-loader',
  ],
};

export default imageFilesLoader;
