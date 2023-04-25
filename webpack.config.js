const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
module.exports = (env) => {
    return{
        entry: [
            './client/index.js'
        ],
        output: {
            path: path.join(__dirname, './dist'),
            publicPath: '/',
            filename: 'bundle.js',
        },

        mode: env.NODE_ENV,
        
        devServer: {
            host: 'localhost',
            port: 8080,
            hot: true,

            static:{
                directory: path.resolve(__dirname, 'client'),
                publicPath: '/'
            },
            headers: { 'Access-Control-Allow-Origin': '*' },
            proxy:{
            '/auth': {
                target: 'http://localhost:3000/',
                secure: false,
                },
            '/api': {
                target: 'http://localhost:3000/',
                secure: false,
                },
            },
        },
        plugins: [
            new HTMLWebpackPlugin({
                template: './client/index.html',
            }),
        ],
        
        module: {
            rules: [
                {
                    test: /.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                     loader: 'babel-loader',
                     options: {
                         presets: ['@babel/preset-env', '@babel/preset-react']
                     }
                    }
                 },
                 {
                    test: /.(css|scss)$/,
                    exclude: /node_modules/,
                    use: ['style-loader', 'css-loader'],
                  },
            ]
        },
        resolve: {
            // Enable importing JS / JSX files without specifying their extension
            extensions: ['.js', '.jsx'],
          },
    }
}