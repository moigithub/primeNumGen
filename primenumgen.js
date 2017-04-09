function primeGenerator(){
  let nums=[false,false];
  for(let i = 2; i< 100; i++ ){
     nums.push(null);
  }
  
  var prime = 2;
  while(true){
  for (let j=prime; j<100; j+=prime){
    if (j ===prime) {
      nums[j]= j;
    } else {
      nums[j] = false;
    }
  }
  
  //busca el siguiente primo q aun no este marcado
  prime = nums.indexOf(null);
  if (prime <0) break;
  }
  return nums.filter(x=>x);
}

