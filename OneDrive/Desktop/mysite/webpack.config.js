const path=require("path");

module.exports={

    entry:"./src/index.js",
    output:{
        path:path.join(__dirname,'public'),
        filename:"bundle.js"
    },
    module:{
        rules:[
          {
            test: /\.(png|svg|jpg|gif|pdf)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]'
                }
              }
            ]
           
          },

            { 
                test: /\.css?$/,
                use: [
                  { loader: "style-loader" },
                  { loader: "css-loader" },
                ]
              },
              {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
              {
                test: /\.scss$/,
                use: [
                  { loader: "style-loader" },
                  { loader: "css-loader" },
                  { loader: "sass-loader" }
                ]
              },           
               
            {
                test:/\.js$/,
                exclude: [/node_modules/],
                loader: 'babel-loader',
              

            }
        ]
    },
    devtool:'cheap-module-source-map',
    devServer:{
        contentBase: path.join(__dirname,'public'),
        historyApiFallback: true
    }
}