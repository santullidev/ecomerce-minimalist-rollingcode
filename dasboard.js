const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});


// Función para obtener los productos del localStorage o crear un array vacío si no existen
function getProductsFromLocalStorage() {
    const products = localStorage.getItem("products");
    return products ? JSON.parse(products) : [];
  }
  
  // Función para guardar los productos en el localStorage
  function saveProductsToLocalStorage(products) {
    localStorage.setItem("products", JSON.stringify(products));
  }
  
  // Función para cargar los productos iniciales del array metadata.js y guardarlos en el localStorage
  function initializeProducts() {
    const products = getProductsFromMetadata();
    saveProductsToLocalStorage(products);
  }
  
  // Función para obtener los productos directamente del array en metadata.js
  function getProductsFromMetadata() {
    return productos; // Asumimos que el array se llama "productos" en el archivo metadata.js
  }
  
  // Función para renderizar la tabla con la información de los productos
  function renderTable() {
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = ""; // Limpiamos la tabla para evitar duplicados
  
    const products = getProductsFromLocalStorage();
  
    // Recorremos el array de productos
    for (const producto of products) {
      // Creamos una nueva fila en la tabla
      const newRow = document.createElement("tr");
  
      // Creamos las celdas (td) para cada campo del producto
      const titleCell = document.createElement("td");
      titleCell.textContent = producto.titulo;
      newRow.appendChild(titleCell);
  
      const categoryCell = document.createElement("td");
      categoryCell.textContent = producto.categoria.nombre;
      newRow.appendChild(categoryCell);
  
      const categoryIdCell = document.createElement("td");
      categoryIdCell.textContent = producto.categoria.id;
      newRow.appendChild(categoryIdCell);
  
      const priceCell = document.createElement("td");
      priceCell.textContent = `$${producto.precio}`;
      newRow.appendChild(priceCell);
  
      const actionsCell = document.createElement("td");
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Eliminar";
      deleteButton.dataset.title = producto.titulo; // Asignamos el título del producto al atributo "data-title"
      deleteButton.className = "delete-button"; // Agregamos una clase para identificar los botones "Eliminar"
      deleteButton.addEventListener("click", () => {
        deleteProduct(producto.titulo);
      });
      actionsCell.appendChild(deleteButton);
      newRow.appendChild(actionsCell);
  
      // Agregamos la nueva fila a la tabla
      tableBody.appendChild(newRow);
    }
  }
  
  // Función para agregar un nuevo producto al array y actualizar la tabla
  function addProductToTable(event) {
    event.preventDefault();
  
    const productForm = document.getElementById("product-form");
    const title = productForm.elements["product-title"].value;
    const category = productForm.elements["product-category"].value;
    const categoryId = productForm.elements["product-category-id"].value;
    const price = productForm.elements["product-price"].value;
  
    const newProduct = {
      titulo: title,
      categoria: {
        nombre: category,
        id: categoryId,
      },
      precio: parseFloat(price),
    };
  
    const products = getProductsFromLocalStorage();
    products.push(newProduct);
    saveProductsToLocalStorage(products); // Guardamos el array actualizado en el localStorage
  
    renderTable(); // Actualizamos la tabla para reflejar el nuevo producto
  
    productForm.reset(); // Limpiamos el formulario después de agregar el producto
  }
  
  // Función para eliminar un producto del array y actualizar la tabla
  function deleteProduct(title) {
    const products = getProductsFromLocalStorage();
    const updatedProducts = products.filter((product) => product.titulo !== title);
    saveProductsToLocalStorage(updatedProducts); // Guardamos el array actualizado en el localStorage
    renderTable(); // Actualizamos la tabla para reflejar el producto eliminado
  }
  
  // Llamamos a la función para cargar y guardar los productos al iniciar
  initializeProducts();
  
  // Llamamos a la función para renderizar la tabla al cargar la página
  renderTable();
  
  // Event listener para el envío del formulario para agregar un nuevo producto
  const productForm = document.getElementById("product-form");
  productForm.addEventListener("submit", addProductToTable);
  