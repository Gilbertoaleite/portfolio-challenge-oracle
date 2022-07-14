export function valida(input) {
   const tipoDeInput = input.dataset.tipo

   if (validadores[tipoDeInput]) {
      validadores[tipoDeInput](input)
	}
	if (input.validity.valid) {
		input.parentElement.classList.remove('input-container--invalido');
		input.parentElement.querySelector('.input-mensagem-erro').innerHTML = ''
	} else {
		input.parentElement.classList.add('input-container--invalido');
		input.parentElement.querySelector('.input-mensagem-erro').innerHTML =
			mostraMensagemDeErro(tipoDeInput, input);
	}

}
const tiposDeErro = [
	'valueMissing',
	'typeMismatch',
	'patternMismatch',
	'customError'
]

const mensagensDeErro = {
	nome: {
		valueMissing: 'O campo nome não pode estar vazio',
	},
	email: {
		valueMissing: 'O campo email não pode estar vazio',
		typeMismatch: 'O campo email digitado não é valido.',
	},
}








