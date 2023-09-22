const _ =  require('lodash')

const alunos = [{
    nome: 'Vedita',
    nota: 7.6
},
{
    nome: 'Piculo',
    nota: 8.5
},
{
    nome: 'Goku',
    nota: 9.8
}]

const media = _.sumBy(alunos, 'nota') / alunos.length
console.log(media)