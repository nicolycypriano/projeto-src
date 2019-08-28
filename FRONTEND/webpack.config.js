const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    //diretório em que o webpack está;
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    //bundle: código transpilado pelo webpack
    module: {
        rules: [
            //rules: informar ao webpak para cada tipo de arquivo, o que ele deve utilizar e o que fazer (converter para o navegador entender)
            {
                test: /\.js$/,
                //$ terminar com aquilo que vem antes
                // \. indica que tem o ponto de verdade, pq a expressão regular acha que tudo que é ponto pode ser qualquer caracter
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
            },
            {
                test: /.*\.(svg|gif|png|jpe?g)$/i,
                //i simboliza insentive (aceita letras maiusculas ou minusculas)
                //? opcional o que vem atrás
                use: {
                    loader: 'file-loader'
                }
            }
        ]
    }
}
