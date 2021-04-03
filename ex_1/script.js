let frase = "border-left-width";
let arr = frase.split('-');
arrNew = arr.join('');
arrNew2 = arrNew.split('');
arrNew2.splice(6, 1, 'L');
arrNew2.splice(10, 1, 'W');
let arrFinish = arrNew2.join('');
console.log(arrFinish);
