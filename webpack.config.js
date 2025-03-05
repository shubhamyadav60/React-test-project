// module.exports = {
//   ignoreWarnings: [
//     {
//         module: /node_modules\/lucide-react/,
//     },
//     module: {
//       rules: [
//         {
//           test: /\.css$.js$/,
//           use: ["style-loader", "css-loader", "postcss-loader",'source-map-loader'],
//                 enforce: 'pre',
//                 exclude: /node_modules/,
                
//         },
//       ],
//     },
//   };
module.exports = {
  ignoreWarnings: [
    {
      module: /node_modules\/lucide-react/,
    },
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,  // fixed regex for CSS files
        use: ["style-loader", "css-loader", "postcss-loader", "source-map-loader"],
        enforce: 'pre',
        exclude: /node_modules/,
      },
    ],
  },
};
