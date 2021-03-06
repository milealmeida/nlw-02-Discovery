//Servidor
const express = require('express');
const server = express();

const  { pageLanding, pageSuccess, pageStudy, pageGiveClasses, saveClasses } = require('./pages');

//Configurar o nunjucks (template engine)
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//Início e configuração do servidor
server
//Receber os dados do req,body
.use(express.urlencoded({ extended: true }))
//Configurar arquivos estáticos (css, scripts, imagens)
.use(express.static('public'))
//Rotas da aplicação
.get('/', pageLanding)
.get('/registration-success', pageSuccess)
.get('/study', pageStudy)
.get('/give-classes', pageGiveClasses)
.post('/save-classes', saveClasses)
//Start do servidor
.listen(5500)