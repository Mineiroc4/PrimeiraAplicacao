const pessoas = [
  {
  altura: 1.70,
  sexo: "M"
  },
  {
    altura: 1.65,
    sexo: "F"
  },
  {
    altura: 1.99,
    sexo: "M"
  },
  {
    altura: 1.80,
    sexo: "F"
  },
  {
    altura: 1.77,
    sexo: "M"
  },
  {
    altura: 1.83,
    sexo: "F"
  },
  {
    altura: 1.52,
    sexo: "F"
  },
  {
    altura: 1.72,
    sexo: "M"
  },
  {
    altura: 1.72,
    sexo: "M"
  },
  {
    altura: 1.69,
    sexo: "M"
  },
  {
    altura: 1.62,
    sexo: "F"
  },
  {
    altura: 1.51,
    sexo: "F"
  },
  {
    altura: 1.89,
    sexo: "M"
  },
  {
    altura: 1.70,
    sexo: "M"
  },
];
/* MÉTODO FOR APENAS PARA FIXAÇÃO DE ESTUDO.
   MAIOR MENOR ALTURA
let maioraltura = 0;
let menoraltura = 10;
for (let i = 0 ; i <= pessoas.length -1; i++ ){
  if (maioraltura < pessoas[i].altura){
    maioraltura = pessoas[i].altura
  }
  if (menoraltura > pessoas[i].altura){
    menoraltura = pessoas[i].altura
  }
}
console.log (maioraltura)
console.log(menoraltura)
*/
let maioraltura = 0;
let menoraltura = 10;
let qtdmulheres = 0;
let alturatotalmulheres = 0;
let qtdhomens = 0;
// MÉTODO FOR EACH.
pessoas.forEach(function(pessoa,index){
  // (1).
  if (maioraltura < pessoa.altura){
    maioraltura = pessoa.altura
  }
  if (menoraltura > pessoa.altura){
    menoraltura = pessoa.altura
  }
  // (2).
  if (pessoa.sexo == "F"){
    qtdmulheres = qtdmulheres + 1
    alturatotalmulheres = alturatotalmulheres + pessoa.altura
  }
  // (3).
  if (pessoa.sexo == "M"){
    qtdhomens = qtdhomens + 1
  }
});
// MAIOR E MENOR ALTURA DO GRUPO. (1).
console.log("A maior altura do grupo é de: " + maioraltura + " metros")
console.log("A menor altura do grupo é de: " + menoraltura + " metros")
// MEDIA DE MULHERS. (2).
console.log("A media de mulheres no grupo é de : " + (alturatotalmulheres/qtdmulheres).toFixed(2) +"%")
// QUANTIDADE DE HOMENS EXISTENTE NO GRUPO. (3).
console.log("A quantidade de homens no grupo é de: " + qtdhomens)