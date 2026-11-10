function contaCifre(numero) {

  if (numero > 9999) {

    return 'Numero troppo grande';

  } 
  
    else if (numero >= 1000) {

    return '4 cifre';

  } 
  
    else if (numero >= 100) {

    return '3 cifre';

  } 
  
    else if (numero >= 10) {

    return '2 cifre';

  } 
  
    else {

    return '1 cifra';

  }

}

console.log(contaCifre(9));

console.log(contaCifre(99));

console.log(contaCifre(12000));