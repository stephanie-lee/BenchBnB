module.exports = {
  context: __dirname,
  entry: "./frontend/bench_bnb.jsx",
  output: {
    path: "./app/assets/javascripts",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react']
        }
      }
    ]
  },
  "dependencies": {
  "babel-core": "^6.1.4",
  "babel-loader": "^6.1.0",
  "babel-preset-react": "^6.1.4",
  "flux": "^2.1.1",
  "history": "1.13.x",
  "react": "^0.14.2",
  "react-addons-linked-state-mixin": "^0.14.2",
  "react-dom": "^0.14.2",
  "react-router": "1.0.2",
  "webpack": "^1.12.4"
},
  devtool: 'source-maps',
  resolve: {
    extensions: ["", ".js", '.jsx']
  }
};
