// Constante para aplicar event al boton
const Salvar = document.querySelector('button');
// Constante para aplicar event al letra
const letra = document.querySelector('input[name="Letra"]');
// Constante para aplicar event al nombre
const nombre = document.querySelector('input[name="Nombre"]');

// Evento click para salvar
Salvar.addEventListener('click', () => {
  alert('Guardado');
});

// Evento focus para nombre
nombre.addEventListener('focus', () => {
  nombre.style.backgroundColor = 'yellow';
});

// Evento blur, perdida de foco,  para nombre
nombre.addEventListener('blur', () => {
  nombre.style.backgroundColor = 'white';
});

// Evento blur, perdida de foco,  para letra
letra.addEventListener('input', () => {
  let letter = letra.value;
  if (letter.length > 0) {
     if ('aeiouáéíóúAEIOUÁÉÍÓÚ'.includes(letter)) {
        letra.style.color = 'red';
      letra.style.backgroundColor = 'lightgrey';
    } else {
      letra.style.color = 'blue';
      letra.style.backgroundColor = 'lightblue';
    }
  }
});