import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
document.addEventListener('DOMContentLoaded', inicio)

function inicio () {
  // selectores
  const textArea= document.querySelector("textarea[name='user-input']");
  const boton= document.getElementById('reset-button')
  const lista= document.querySelectorAll("li");
  const label= document.querySelector("label");
  const select=document.querySelector("select");
  select.style.display="none";
  
  //eventos
  textArea.addEventListener('input', () => {
    const palabras= analyzer.getWordCount(textArea.value)
    lista[2].innerHTML= `
    Palabras: ${palabras}
        `
  });
  textArea.addEventListener('input', () => {
    const caracteres= analyzer.getCharacterCount(textArea.value)
    lista[0].textContent= `
    Carácteres: ${caracteres}
        `
  });
  
  textArea.addEventListener('input', () => {
    const caracteresSin= analyzer.getCharacterCountExcludingSpaces(textArea.value);
    lista[1].innerHTML= `
    Carácteres sin espacio: ${caracteresSin}
    `
  });
    
  textArea.addEventListener('input', () => {
    const obtenerNumeros= analyzer.getNumberCount(textArea.value);
    lista[3].innerHTML= `
    Números: ${obtenerNumeros}
    `
  });

  textArea.addEventListener('input', () => {
    const suma= analyzer.getNumberSum(textArea.value);
    lista[4].innerHTML= `
    Suma Números: ${suma}
    `
  });
    
  textArea.addEventListener('input', () => {
    const promedio= analyzer.getAverageWordLength(textArea.value);
    lista[5].innerHTML= `
    Promedio longitud: ${promedio}
    ` 
  });
    
  boton.addEventListener('click', () => {
    document.querySelector("textarea[name='user-input']").value= "";
    lista[0].innerHTML= "Carácteres:"
    lista[1].innerHTML= "Carácteres sin espacios:"
    lista[2].innerHTML= "Palabras:"
    lista[3].innerHTML= "Números:"
    lista[4].innerHTML= "Suma números:"
    lista[5].innerHTML= "Promedio longitud:" 
  });

  label.addEventListener('click', () => {

    if(select.style.display === 'none') {
      select.style.display='block'
    } else {
      select.style.display='none'
    }
  });

  select.addEventListener('change', (e) => {
    const valor= e.target.value;

    switch (valor) {
    case 'Rosa':
      document.querySelector('h1').style.color="#ab0889"
      document.querySelector('div').style.borderColor="#ab0889"
      boton.style.backgroundColor="#ff83ec"
      break;
    case 'Azul':
      document.querySelector('h1').style.color="#008080"
      document.querySelector('div').style.borderColor="#008080"
      boton.style.backgroundColor="#008080"
      break;
    case 'Verde':
      document.querySelector('h1').style.color="#4c9141"
      document.querySelector('div').style.borderColor="#4c9141"
      boton.style.backgroundColor="#4c9141"
      break;
    default:
      break;
    }
  })

}
    
