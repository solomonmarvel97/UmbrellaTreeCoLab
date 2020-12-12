module.exports = {
  lintOnSave: false,
  mode: 'production',
  publicPath: process.env.NODE_ENV === 'production'
        ? ''
        : ''
};
