const fila = document.querySelector('.contenedor-principal');
const prendas = document.querySelector('.prendas') 
const izquierda = document.getElementById('izquierda');
const derecha = document.getElementById('derecha');


//-----------------------Event listener para flecha derecha------------------


derecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;
    
	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.nextSibling){
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
izquierda.addEventListener('click', () => {
	fila.scrollLeft -= fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.previousSibling){
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});


