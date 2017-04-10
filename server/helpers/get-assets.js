export const getAssets = () => {
  const cssAssets = [

  ];

  // cssAssets = cssAssets.concat(cssFiles);

  const jsAssets = [
    './client/bundles/bundle.js',
    '//code.jquery.com/jquery-2.2.4.min.js',
  ];

  // jsAssets = jsAssets.concat(jsFiles);

  return {
    jsAssets,
    cssAssets,
  };
};
