class Despesa {
	constructor(ano, mes, dia, tipo, descricao, valor) {
		this.Ano = ano
		this.mes = mes
		this.dia = dia
		this.tipo = tipo
		this.descricao = descricao
		this.valor = valor
	}

	validarDados() {
		for(let i in this) {
			if(this[i] == undefined || this[i] == '' || this[i] == null) {
				return false

			}
		}
		return true
	}
}

class Bd{

	constructor(){
		let id = localStorage.getItem('id')
		if(id === null) {
			localStorage.setItem('id', 0)
		} 
	}

	getProximoId() {
		let proximoId = localStorage.getItem('id')
		//console.log(parseInt(proximoId) + 1)
		return parseInt(proximoId) + 1
	}

	gravar(d) {
		let id = this.getProximoId()
		localStorage.setItem(id, JSON.stringify(d))
		localStorage.setItem('id', id)
	}
}

let bd = new Bd()


function cadastrarDespesas() {


	let ano = document.getElementById('ano')
	let mes = document.getElementById('mes')
	let dia = document.getElementById('dia')
	let tipo = document.getElementById('tipo')
	let descricao = document.getElementById('descricao')
	let valor = document.getElementById('valor')
	

	let despesa = new Despesa(
		ano.value, 
		mes.value, 
		dia.value, 
		tipo.value, 
		descricao.value, 
		valor.value)	

	if (despesa.validarDados()) {
		bd.gravar(despesa)
		// sucess
		//console.log('Dados validos')
		document.getElementById('modal_titulo').innerHTML = 'Dados gravados com sucesso'
		document.getElementById('modal_titulo_div').className = 'modal-header text-success'
		document.getElementById('modal_msg').innerHTML = 'Parabéns seu cadastro foi realizado com sucesso!!'
		document.getElementById('modal_button').innerHTML = 'Voltar'
		document.getElementById('modal_button').className = 'btn btn-outline-success'
		$('#modalRegistroDespesa').modal('show')

	} 
	else {
		// error
		//console.log('Dados invalidos')
		document.getElementById('modal_titulo').innerHTML = "Erro na inclusão do registro"
		document.getElementById('modal_titulo_div').className = 'modal-header text-danger'
		document.getElementById('modal_msg').innerHTML = 'Existem campos obrigatórios que não forma preenchidos'
		document.getElementById('modal_button').innerHTML = 'Voltar e corrigir'
		document.getElementById('modal_button').className = 'btn btn-outline-danger'
		$('#modalRegistroDespesa').modal('show')

	}

}

