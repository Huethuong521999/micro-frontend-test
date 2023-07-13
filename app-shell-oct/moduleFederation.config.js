const { dependencies } = require('./package.json');

module.exports = {
  name: 'shell',
  filename: 'remoteEntry.js',
  exposes: {},
  remotes: {
    admin: 'admin@http://localhost:3001/remoteEntry.js',
    shell: 'shell@http://localhost:3004/remoteEntry.js',
  },
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
