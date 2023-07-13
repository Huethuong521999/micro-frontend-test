const { dependencies } = require('./package.json');

module.exports = {
  name: 'admin',
  filename: 'remoteEntry.js',
  exposes: {
    './App': './src/App',
  },
  remotes: {},
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      import: 'react',
      shareScope: 'default',
      requiredVersion: dependencies.react,
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
  },
};
