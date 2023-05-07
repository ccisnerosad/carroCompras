let productos = [];
productos = ['Agua', 'Café', 'Azúcar'];

const ingresaProducto = (indicacion) => {
        const producto = prompt(indicacion);

        if (productos.includes(producto)) {
                console.log('Se encontró el producto ' + producto + ' en el array.');
                let i = 0;
                let listaProductos = '';

                while (i < productos.length) {
                        listaProductos += productos[i] + '\n';
                        i++;
                }
                alert('Los productos disponibles son:\n' + listaProductos);

        } else {
                productos.push(producto);
                let i = 0;
                let listaProductos = '';

                while (i < productos.length) {
                        listaProductos += productos[i] + '\n';
                        i++;
                }
                
                alert('Se agregó '+ producto + ' a la lista: \n'+ listaProductos);
        }
}

ingresaProducto('Ingresa el nombre del producto');
