let productosEnCarrito = localStorage.getItem("porductos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciarCarrito = document.querySelector("#carrito-acciones-vaciar");
const botonComprar = document.querySelector("#carrito-acciones-comprar");
const contenedorTotal = document.querySelector("#total");


function cargarProductosCarrito(){
    if(productosEnCarrito && productosEnCarrito.length > 0){
        
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");  
    
        contenedorCarritoProductos.innerHTML = " ";
    
        
        productosEnCarrito.forEach(producto => {
    
            const div = document.createElement("div");
            div.classList.add("carrito-item"); 
            div.innerHTML = `
            <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="carrito-producto-titulo">
                <small>Título</small>
                <h3>${producto.titulo}</h3>
            </div>   
            <div class="carrito-producto-cantidad">
                 <small>Cantidad</small>
                 <p>${producto.cantidad}</p>
            </div>
            <div class="carrito-producto-precio">
                 <small>Precio</small>
                 <p>$${producto.precio}</p>
            </div>
            <div class="carrito-producto-subtotal">
             <small>Subtotal</small>
                <p>$${producto.precio * producto.cantidad}</p>
            </div>
            <button class="carrito-producto-eliminar" id = ${producto.id}><i class="bi bi-trash-fill"></i></button>        
            `;
            contenedorCarritoProductos.append(div);
            
        }) 
    }else{
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled"); 
    }
    actualizarBotonesEliminar(); 
    actualizarTotal();
}

cargarProductosCarrito();


function actualizarBotonesEliminar(){
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
    botonesEliminar.forEach(boton => {
       boton.addEventListener("click", eliminarDelCarrito);
 
    });
}    

function eliminarDelCarrito(e){
    const idBoton = e.currentTarget.id;
    const subIndice = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    
    productosEnCarrito.splice(subIndice,1);
    cargarProductosCarrito();

    localStorage.setItem("porductos-en-carrito", JSON.stringify(productosEnCarrito));
}

botonVaciarCarrito.addEventListener("click", vaciarCarrito);
function vaciarCarrito(){

    productosEnCarrito.length = 0;
    localStorage.setItem("porductos-en-carrito", JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();
}

function actualizarTotal(){
    const totalCalculado = productosEnCarrito.reduce((acumulador, producto) => acumulador + (producto.precio * producto.cantidad), 0);
    total.innerText = `$${totalCalculado}`;
}

botonComprar.addEventListener("click", comprarCarrito);

function comprarCarrito(){

    productosEnCarrito.length = 0;
    localStorage.setItem("porductos-en-carrito", JSON.stringify(productosEnCarrito));

    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");
}