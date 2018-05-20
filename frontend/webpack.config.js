const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    // todo config

    entry: './src/index.jsx', // ponto de entrada, .jsx para facilitar codigo react
    output: {
        path: __dirname + '/public', 
        filename: './app.js' // nome do arquivo para ficar no path:
    },
    devServer: {
        port: 8080,
        contentBase: './public', // apontando para pasta publica
    },
    resolve: { 
        // resolver alguns tipos de extensao
        // por padrao, ele nao reconhece os import com extensao .jsx
        extensions: ['', '.js', '.jsx'],
        alias: {
            // apelido para pasta node_modules, para nao ficar node_modules e ...

            modules: __dirname + '/node_modules', // entao dentro da minha aplicacao
            // se eu quiser referenciar por exemplo o bootstrap, basta colocar
            // modules/bootstrap/dist/ .....
        }
    },
    plugins: [
        // nosso css
        new ExtractTextPlugin('app.css') // qual o nome do arquivo que ele vai gerar, apartir do 
        // parser dos nossos css

    ],
    module: {
        // nossos loaders
        loaders: [{
            test: /.js[x]?$/, // tanto fazer parser .js quanto .jsx, serao interpretados
            loader: 'babel-loader', // loader e o babel-loader
            exclude: /node_modules/, //  nao quero fazer parser dos arquivos que estao no node_modules, entao excluo ele disso
            query: { // para nao ocorrer problemas em syntax novas, como a parte do clone do exemplo {...}
                presets: ['es2015', 'react'], 
                plugins: ['transform-object-rest-spread']
            }
        }, { // outro loader para css
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, { // terceiro loader para fontes, quando importo as fontes, e para o webpack
            // conseguir interpretar esses arquivos precisa fazer esse loader
            test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
            loader: 'file'
        }]
    }
}