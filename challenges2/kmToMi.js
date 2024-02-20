// write a function that takes a number param in km converts it to miles. Return the converted number.


function convertKmMi(km){

   let convertedMi = 0;
   convertedMi = (km * .621);

   // console.log(convertedMi);
   return convertedMi;
};



function celciusToF(celciusValue){
   
   let fValue = 0;
   fValue = (9/5 * celciusValue + 32);
   
   // console.log(fValue);
   return fValue;
};

convertKmMi(100);
celciusToF(40);
