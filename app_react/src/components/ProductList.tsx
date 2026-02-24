import React from 'react';
import type { Product } from '../types/Product';

interface ProductListProps {
  // TODO: Definir las props del componente
  // products: Product[];
  // onProductDeleted: () => void;
}

// TODO: Implementar el componente ProductList
//
// Requisitos:
// 1. Recibir array de productos por props
// 2. Mostrar productos en una tabla o lista
// 3. Mostrar: nombre, precio, stock, categoría
// 4. Botón "Eliminar" en cada producto
// 5. Al eliminar, llamar a deleteProduct del servicio
// 6. Llamar a onProductDeleted después de eliminar
//
// Sugerencias:
// - Usar useEffect para cargar productos al montar el componente
// - Manejar estado de loading
// - Mostrar mensaje si no hay productos

const ProductList: React.FC<ProductListProps> = () => {
  return (
    <div>
      <p>TODO: Implementar ProductList</p>
      {/* TODO: Agregar tabla o lista de productos */}
      {/* TODO: Botón eliminar en cada fila */}
    </div>
  );
};

export default ProductList;


