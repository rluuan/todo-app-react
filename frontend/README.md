frontend
    o browser nao consegue interpretar os codigos jsx de modo nativa, entao precisa ser feito uma conversao, e quem faz isso e o babel

babel-core@6.22.1
babel-loader@6.2.10 // conexao entre o babel e o webpack
babel-plugin-react-html-attrs@2.0.0 // plugin relacionado aos atributos
babel-plugin-transofrm-object-rest-spread@6.22.0
babel-preset-es2015@6.22.0 // para syntax nova do javascript
babel-preset-react@6.22.0

// processamento de css, imagens, fontes

extract-text-webpack-plugin@1.0.1 // um plugin que vai extrair o texto dos arquivos .css para depois passar para um processo de css-loader e o style-loader
css-loader@0.26.1
style-loader@0.13.1 
file-loader@0.9.0 // fontes e imagens dentro da configuracao do webpack

// dependencias do template

bootstrap@3.3.7 
font-awesome@4.7.0

// dependencias do react

react@15.4.2 
react-dom@15.4.2
react-router@3.0.2
axios@0.15.3 // e o cliente http, baseado em promisses, fazer chamadas https para o backend, muito usado com que trabalha com o react


package.json
// --progress --colors = mostrando o progress colorido
// --inline --hot = ficar atualizando o browser sempre quando houver uma mudanca