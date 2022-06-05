/* atividade 1

const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
	{
		nome: 'Miguel',
		nota: 3,
		turma: '2C',
	},
];


function alunosAprovados(alunos, media){
    let aprovados = [];

    for (let i = 0; i < alunos.length; i++) {
        let { nota, nome } = alunos [i];

        if (nota >= media) {
            aprovados.push(nome);
        }
    }

    return aprovados;
};

console.log(alunosAprovados(alunos, 6));

*/

/* experimentos com js

	document.getElementById('limpar').addEventListener('click', () => document.querySelector('input').innerHTML = ""
	);

*/

//atividade 2

const usuario = {
	nome: 'Lucas',
	idade: 27,
};

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}



console.log(calculaIdade.call(usuario, 20));





