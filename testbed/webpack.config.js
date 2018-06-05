const path = require('path');

module.exports = [
  {
    entry: {
      index: [path.resolve(__dirname, 'app.js')],
    },
    mode: 'development',
    output: {
      filename: 'output.js',
    }
  },
  {
    entry: {
      index: [path.resolve(__dirname, 'iframe-app.js')],
    },
    mode: 'development',
    output: {
      filename: 'iframe-bundle.js',
    }
  }
]