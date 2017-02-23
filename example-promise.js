function getTempPromise(location){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve(79);
      reject('city not found!');
    }, 1000);
  });
}

getTempPromise('Philadelfia').then(function(temp){
  console.log('promise sucesso', temp);
}, function(err){
  console.log('promise erro', err);
})

function addPromise(a,b){
  return new Promise(function(resolve, reject){
    if(typeof a === 'number' && typeof b === 'number'){
      resolve(a+b);
    }else{
      reject('a e b tem que ser numeros!');
    }
  });
}

addPromise(5, 7).then(function(temp){
  console.log('promise sucesso', temp);
}, function(err){
  console.log('promise erro', err);
})

addPromise('a5', 'a7').then(function(temp){
  console.log('promise sucesso', temp);
}, function(err){
  console.log('promise erro', err);
})
