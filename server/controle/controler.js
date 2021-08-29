const candidato = require('../models/candidato');

module.exports = {
    async register(req, res){
        const { nome, cargo, data, civil, sexo, cep, endereco, num, bairro, cidade, estado, celular,
        telFixo, email, cpf, rg, veiculo, habilitacao} = req.body;

        const novoCandidato = new candidato();

        novoCandidato.nome = nome;
        novoCandidato.cargo = cargo;
        novoCandidato.data = data;
        novoCandidato.civil = civil;
        novoCandidato.sexo = sexo;
        novoCandidato.cep = cep;
        novoCandidato.endereco = endereco;
        novoCandidato.num = num;
        novoCandidato.bairro = bairro;
        novoCandidato.cidade = cidade;
        novoCandidato.estado = estado;
        novoCandidato.celular = celular;
        novoCandidato.telFixo = telFixo;
        novoCandidato.email = email;
        novoCandidato.cpf = cpf;
        novoCandidato.rg = rg;
        novoCandidato.veiculo = veiculo;
        novoCandidato.habilitacao = habilitacao;

        novoCandidato.save((err,savedCandidate) => {
            if(err) {
                console.log(err);
                return res.status(500).send(err);
            }
            return res.status(200).send(savedCandidate);
        });

    }
}