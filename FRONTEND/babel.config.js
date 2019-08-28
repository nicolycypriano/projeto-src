module.exports = {
    presets: [
        '@babel/preset-env', //Tranforma as coisas que o navegador não entende do JS (Ex.: Module exports do JS)
        '@babel/preset-env' //Tranforma as coisas que o navegador não entende do React(Ex.: JSX)
    ],
    plugins: ['@babel/plugin-proposal-class-properties']
}
