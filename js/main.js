const contenedorProductos= document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal= document.querySelector("#titulo-principal");
let botonesComprar = document.querySelectorAll(".btn-comprar");
const cantidadItems = document.querySelector("#cantidad-items");


function cargarProductos(productosElegidos){
   contenedorProductos.innerHTML= ""; // primero limpiamos el contenedor antes de cargarlo
   
   productosElegidos.forEach(productos => {
      
      let div = document.createElement("div");
      div.classList.add("box-producto");
      div.innerHTML = `
         <div class="producto"> 
            <img src="${productos.imagen}" class="d-block w-100" alt="${productos.titulo}">
            <div class="overlay">
               <a href="#contenedor-productos" class="btn-comprar" id="${productos.id}">Comprar ahora</a>
            </div>
         </div>
         <div class="detalle-producto">
              <div class="detalle">
                  <a href="#">${productos.titulo}</a>
                  <span>Recien llegada</span>
              </div>
              <a href="#" class="precio">$${productos.precio}</a>
         </div>             
      `;
      contenedorProductos.append(div);

   })
   actualizarBotonesComprar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
      boton.addEventListener("click", (e) => {

      botonesCategorias.forEach(boton => boton.classList.remove("active"));
      e.currentTarget.classList.add("active");
      

      if(e.currentTarget.id != "todos"){

         let productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
         tituloPrincipal.innerText = productoCategoria.categoria.nombre;

         let categoriaElegida = productos.filter(item => item.categoria.id === e.currentTarget.id )
         cargarProductos(categoriaElegida);    
      }else{
         tituloPrincipal.innerText = "Todos los Productos"
         cargarProductos(productos);
      }
   })
});

function actualizarBotonesComprar(){
   botonesComprar = document.querySelectorAll(".btn-comprar");
   botonesComprar.forEach(boton => {
      boton.addEventListener("click", agregarAlCarrito);
   });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("porductos-en-carrito");

if(productosEnCarritoLS){
   productosEnCarrito = JSON.parse(productosEnCarritoLS);
   actualizarCantidadItems();
}else{
   productosEnCarrito = [];
}

function agregarAlCarrito(e){

   const productoId = e.currentTarget.id;
   const productoAgregado = productos.find(producto => producto.id === productoId);

   if (productosEnCarrito.some(producto => producto.id === productoId)){
      const indice = productosEnCarrito.findIndex(producto => producto.id === productoId);
      productosEnCarrito[indice].cantidad++;
   }else{
      productoAgregado.cantidad = 1;
      productosEnCarrito.push(productoAgregado);
   }
   actualizarCantidadItems();
   localStorage.setItem("porductos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarCantidadItems(){
   let itemsCantidad = productosEnCarrito.reduce((acumulador, producto) => acumulador + producto.cantidad, 0);
   cantidadItems.innerText = itemsCantidad;
}



