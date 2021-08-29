const mongoose =require ('mongoose');

const candidatoSchema = new mongoose.Schema({
    nome: {type: text, unique: false, required: true},
    cargo: {type: text, unique: false, required: true},
    data: {type: data, unique: false, required: true},
    civil: {type: text, unique: false, required: true},
    cep: {type: numero, unique: false, required: true},
    sexo: {type: text, unique: false, required: true},
    endereco: {type: text, unique: false, required: true},
    num: {type: text, unique: false, required: true},
    bairro: {type: text, unique: false, required: true},
    cidade: {type: text, unique: false, required: true},
    estado: {type: text, unique: false, required: true},
    celular: {type: text, unique: false, required: true},
    telFixo: {type: text, unique: false, required: false},
    email: {type: email, unique: false, required: true},
    cpf: {type: numero, unique: true, required: true},
    rg: {type: numero, unique: false, required: true},
    veiculo: {type: text, unique: false, required: true},
    habilitacao: {type: text, unique: false, required: true}
}, {
    timestamps: true
});

const candidato = mongoose.model('Candidato', candidatoSchema);

module.exports = candidato;