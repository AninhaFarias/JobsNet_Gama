// Validação de CEP

'use strict';

const limparFormulario = (endereco) =>{
    document.getElementById('endereco').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}


const preencherFormulario = (endereco) =>{
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}


const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumero(cep); 

const pesquisarCep = async() => {
    limparFormulario();
    
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    if (cepValido(cep)){
        const dados = await fetch(url);
        console.log('entrei', cep);
        const endereco = await dados.json();
        console.log('end', endereco);
        if (endereco.hasOwnProperty('erro')){
            document.getElementById('endereco').value = 'CEP não encontrado!';
        }else {
            preencherFormulario(endereco);
        }
    }else{
        document.getElementById('endereco').value = 'CEP incorreto!';
    }
     
}

document.getElementById('cep').addEventListener('focusout',pesquisarCep);




// Validação de CPF
function validaCPF(cpf) {
    
    console.log(cpf.length);
    if(cpf.length != 11){
        return false;
    }
    else{
       var numeros= cpf.substring(0,9);
       var digitos= cpf.substring(9);

        var soma = 0;
      for (var i = 10; i > 1;i--){
        soma += numeros.charAt(10 - i )* i;
      }
       
       var resultado = (soma % 11)  < 2 ? 0 : 11- (soma % 11 );

       
       if (resultado != digitos.charAt(0)) {
           return false;
  }

  soma = 0;
  numeros = cpf.substring(0,10);

  for ( var k = 11; k > 1; k --){
      soma += numeros.charAt(11 - k) * k;      
  }

      resultado = soma % 11 < 2 ? 0: 11 - (soma % 11);
  
       if( resultado!= digitos.charAt(1)){
           return false;

       }
      
      return true;
    }
}

function validacao(){
    console.log('iniciando validação CPF');
     document.getElementById('success').style.display ="none"
     document.getElementById('error').style.display ="none";


    var cpf= document.getElementById("cpf_digitado").value;
    
    var resultadoValidacao= validaCPF (cpf);

    if (resultadoValidacao){
        document.getElementById('success').style.display=  "block";      

    }
    else {
        document.getElementById('error').style.display ="block";
    }
}