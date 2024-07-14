const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    // 
    let contador= 0;
    const space= text.trim();

    if(space === "" || space === "           " ) {
      return 0;
    }

    const espacio= " "; 
    const nuevoArray= space.split(espacio);
    const signosP= '{}»«().,;:[]-"¿?¡!';

    if(nuevoArray.length < 2) {
      for(let i=0; i < nuevoArray[0].length; i++) {
        if(nuevoArray[0].length >= 3){
          for(let i=0; i <nuevoArray[0].length; i++){
            if(signosP.includes(nuevoArray[0][i])){
              contador++;
              if(contador >= 3)
                return 0;
            } else {
              return nuevoArray.length
            }
          }
          
        } else {
          return nuevoArray.length
        }
      }  
    } else {
      return nuevoArray.length
    }
    
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const space= "";
    const newArray= text.split(space);
    
    return newArray.length;
    
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    
    let total= 0
    for (let i= 0; i < text.length; i++) {
      if(!(text[i] === "{" ||text[i] === "}" ||text[i] === "»" ||text[i] === "«" ||text[i] === " " || text[i] === ")" || text[i] === "." || text[i] === "," || text[i] === ";" || text[i] === ":" || text[i] === "(" || text[i] === "[" || text[i] === "]" || text[i] === "-" || text[i] === '"' || text[i] === "¿" || text[i] === "?" || text[i] === "!" || text[i] === "¡")) { // la condicion andentro significa: si el caracter es igual o x o y, se cumple la condicion pero como ponemos ! revertimos la compracaion
        total++;
      } 
    }
    return total;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const space= text.trim();
    const espacio= " ";
    const nuevoArray= space.split(espacio);
    const signosP= '{}»«().,;:[]-"¿?¡!'
    let contador= 0;

    if(nuevoArray.length < 2) {
      for(let i=0; i < nuevoArray[0].length; i++) {
        if(nuevoArray[0].length >= 3){
          for(let i=0; i <nuevoArray[0].length; i++){
            if(signosP.includes(nuevoArray[0][i])){
              contador++;
              if(contador >= 3) {
                return 0;
              } else {
                true;
              }
                
            } 
          }
          
        } 
      }  
    } 


    let agrupacion= []
    for(let i=0; i < nuevoArray.length; i++) {
      agrupacion= [...agrupacion, nuevoArray[i].length]
    }

    let total= 0;
    let prueba= 0;

    for (let i= 0; i < agrupacion.length; i++) {
      total += agrupacion[i] / agrupacion.length;
      prueba= total.toFixed(2); 
    }


    return Number(prueba);

  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const space= text.trim();

    if(space === "") {
      return 0;
    }
    const espacio= " ";
    const nuevoArray= space.split(espacio);
   
    for (let i = 0; i < nuevoArray.length; i++) {
      if (nuevoArray[i].endsWith(".")) {
        nuevoArray[i] = nuevoArray[i].substring(0, nuevoArray[i].length - 1);
      }
    }

    let total= 0;

    let caracter;
    for(caracter of nuevoArray) {
      if(!isNaN(Number(caracter))){
        total++; 
      }  
    }
    return total
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    
    const space= text.trim();
    const espacio= " ";
    const nuevoArray= space.split(espacio);

    for (let i = 0; i < nuevoArray.length; i++) {
      if (nuevoArray[i].endsWith(".")) {
        nuevoArray[i] = nuevoArray[i].substring(0, nuevoArray[i].length - 1);
      }
    }

    const evaluacion = nuevoArray.filter((caracter) => !isNaN(Number(caracter)));
    const numeros= evaluacion.map( elemento => {
      return Number(elemento)
    })
    let suma= 0;
    numeros.forEach((numero) => {
      
      return suma += numero
      
    });
    return suma;
    
  },
    
};

export default analyzer;
