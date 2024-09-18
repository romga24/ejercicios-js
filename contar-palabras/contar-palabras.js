
document.addEventListener('DOMContentLoaded', function(){
    
    //Obtenemos la referencia de las etiquetas html
    const formulario = this.getElementById('palabras-escritas');
    const numCaract = this.getElementById('numero-caracteres');
    const numCaractSinEsp = this.getElementById('numero-caracteres-sin-espacio');
    const numPalabras = this.getElementById('numero-palabras');
    
    formulario.addEventListener('input', function(){
        let contenidoFormulario = formulario.value;
        numCaract.textContent = contarCaracteresConEspacio(contenidoFormulario);
        numCaractSinEsp.textContent = contarCaracteresSinEspacio(contenidoFormulario);
        numPalabras.textContent = contarPalabras(contenidoFormulario);
    });

});


function contarPalabras(contenidoForm) {
    // Usar split y filter para contar las palabras, evitando contar elementos vacíos
    return contenidoForm.split(/\s+/).filter(word => word.length > 0).length;
}

function contarCaracteresConEspacio(contenidoForm) {
    return contenidoForm.length;
}

function contarCaracteresSinEspacio(contenidoForm) {
    // Reemplazar todos los espacios por una cadena vacía y luego contar la longitud
    return contenidoForm.replace(/\s+/g, '').length;
}
