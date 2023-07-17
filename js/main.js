const productos= [
   //abrigos
   {
      id:"abrigo-01",
      titulo: "abrigo-01",
      imagen: "./img/abrigos/01.jpg",
      categoria:{
         nombre:"Abrigos",
         id:"abrigos"
      },
      precio: 1000,
   },
   {
      id:"abrigo-02",
      titulo: "abrigo-02",
      imagen: "./img/abrigos/02.jpg",
      categoria:{
         nombre:"Abrigos",
         id:"abrigos"
      },
      precio: 1000,
   },
   {
      id:"abrigo-03",
      titulo: "abrigo-03",
      imagen: "./img/abrigos/03.jpg",
      categoria:{
         nombre:"Abrigos",
         id:"abrigos"
      },
      precio: 1000,
   },
   {
      id:"abrigo-04",
      titulo: "abrigo-04",
      imagen: "./img/abrigos/04.jpg",
      categoria:{
         nombre:"Abrigos",
         id:"abrigos"
      },
      precio: 1000,
   },
   {
      id:"abrigo-05",
      titulo: "abrigo-05",
      imagen: "./img/abrigos/05.jpg",
      categoria:{
         nombre:"Abrigos",
         id:"abrigos"
      },
      precio: 1000,
   },
   {
      id:"abrigo-06",
      titulo: "abrigo-06",
      imagen: "./img/abrigos/06.jpg",
      categoria:{
         nombre:"Abrigos",
         id:"abrigos"
      },
      precio: 1000,
   },
   //pantalones
   {
      id:"pantalones-01",
      titulo: "pantalones-01",
      imagen: "./img/pantalones/01.jpg",
      categoria:{
         nombre:"Pantalones",
         id:"pantalones"
      },
      precio: 1000,
   },
   {
      id:"pantalones-02",
      titulo: "pantalones-02",
      imagen: "./img/pantalones/02.jpg",
      categoria:{
         nombre:"Pantalones",
         id:"pantalones"
      },
      precio: 1000,
   },
   {
      id:"pantalones-03",
      titulo: "pantalones-03",
      imagen: "./img/pantalones/03.jpg",
      categoria:{
         nombre:"Pantalones",
         id:"pantalones"
      },
      precio: 1000,
   },
   {
      id:"pantalones-04",
      titulo: "pantalones-04",
      imagen: "./img/pantalones/04.jpg",
      categoria:{
         nombre:"Pantalones",
         id:"pantalones"
      },
      precio: 1000,
   },
   {
      id:"pantalones-05",
      titulo: "pantalones-05",
      imagen: "./img/pantalones/05.jpg",
      categoria:{
         nombre:"Pantalones",
         id:"pantalones"
      },
      precio: 1000,
   },
   {
      id:"pantalones-06",
      titulo: "pantalones-06",
      imagen: "./img/pantalones/06.jpg",
      categoria:{
         nombre:"Pantalones",
         id:"pantalones"
      },
      precio: 1000,
   },
   //remeras
   {
      id:"remeras-01",
      titulo: "remeras-01",
      imagen: "./img/remeras/01.jpg",
      categoria:{
         nombre:"Remeras",
         id:"remeras"
      },
      precio: 1000,
   },
   {
      id:"remeras-02",
      titulo: "remeras-02",
      imagen: "./img/remeras/02.jpg",
      categoria:{
         nombre:"Remeras",
         id:"remeras"
      },
      precio: 1000,
   },
   {
      id:"remeras-03",
      titulo: "remeras-03",
      imagen: "./img/remeras/03.jpg",
      categoria:{
         nombre:"Remeras",
         id:"remeras"
      },
      precio: 1000,
   },
   {
      id:"remeras-04",
      titulo: "remeras-04",
      imagen: "./img/remeras/04.jpg",
      categoria:{
         nombre:"Remeras",
         id:"remeras"
      },
      precio: 1000,
   },
   {
      id:"remeras-05",
      titulo: "remeras-05",
      imagen: "./img/remeras/05.jpg",
      categoria:{
         nombre:"Remeras",
         id:"remeras"
      },
      precio: 1000,
   },
   {
      id:"remeras-06",
      titulo: "remeras-06",
      imagen: "./img/remeras/06.jpg",
      categoria:{
         nombre:"Remeras",
         id:"remeras"
      },
      precio: 1000,
   },
   {
      id:"remeras-07",
      titulo: "remeras-07",
      imagen: "./img/remeras/07.jpg",
      categoria:{
         nombre:"Remeras",
         id:"remeras"
      },
      precio: 1000,
   },
   {
      id:"remeras-08",
      titulo: "remeras-08",
      imagen: "./img/remeras/08.jpg",
      categoria:{
         nombre:"Remeras",
         id:"remeras"
      },
      precio: 1000,
   },
]; 

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
               <a href="#" class="btn-comprar" id="${productos.id}">Comprar ahora</a>
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



