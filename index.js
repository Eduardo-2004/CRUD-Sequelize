const Sequelize = require('sequelize');

const sequelize = new Sequelize('Financeiro','rodrigo', '076534', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(function(){
    console.log('Conexão realizada com sucesso!')
}).catch(function(err){
    console.log('Erro ao realizar a conexão com BD ' + err);
});

const Pagamento = sequelize.define('pagamentos', {
    //attributes
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    valor: {
        type: Sequelize.DOUBLE
        //allowNull defaults to true
    }
});

// Criar a tabela com Sequelize
// Pagamento.sync({force: true});

Pagamento.create({
    nome: 'Caixa de Agua',
    valor: 789.70
});