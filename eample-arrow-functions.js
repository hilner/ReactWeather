var names = ['Andrew', 'tete', 'dfdf'];
//
// names.forEach(function(name){
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrow func', name);
// });
//
// names.forEach((name) => console.log('es6:', name));
//
// console.log(retorne('teste'));
// var retorne = (nome) => nome + '!!';

var pessoa = {
  nome: 'Teste',
  greet: function(){
        names.forEach((nome) =>{
          console.log(this.nome + ' diz oi para '+ nome);
        })
  }
};

// pessoa.greet('okok');

var adda = (a,b) => {
  return a+b;
}
console.log(adda(8,7));

var adde = (a,b) => a+b;
console.log(adde(9,4));
