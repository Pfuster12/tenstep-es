const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin')
module.exports = {
    mode: 'development',
   entry: './src/index.tsx',
   output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'public'),
   },
   resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
    },
    plugins: [
        new CopyPlugin([
          { from: 'src/index.html', to: '.' }
      ]),
      new CleanPlugin()
    ],
   module: {
     rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader',
           'postcss-loader'
         ],
       },
       {
         test: /\.(png|svg|jpg|gif|pdf)$/,
         use: [
           'file-loader',
         ],
       },
       {
         test: /\.(woff|woff2|eot|ttf|otf)$/,
         use: [
           'file-loader',
         ],
       },
   ],
},
};
