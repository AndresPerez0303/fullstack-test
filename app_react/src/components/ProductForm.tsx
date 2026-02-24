import React from 'react';
// import type { Product } from '../types/Product';

interface ProductFormProps {
  // TODO: Definir las props del componente
  // onProductAdded: () => void;
}

// TODO: Implementar el componente ProductForm
//
// Requisitos:
// 1. Formulario con campos: name, price, stock, category
// 2. Usar useState para manejar el estado del formulario
// 3. Validaciones:
//    - Todos los campos son requeridos
//    - price debe ser número positivo
//    - stock debe ser número no negativo
// 4. Al enviar:
//    - Llamar a createProduct del servicio
//    - Limpiar formulario si es exitoso
//    - Llamar a onProductAdded
// 5. Mostrar mensajes de error si hay problemas
//
// Sugerencias:
// - Usar onSubmit en el form
// - preventDefault para evitar recarga
// - Validar antes de enviar

const ProductForm: React.FC<ProductFormProps> = () => {
  // TODO: Agregar estados para cada campo del formulario
  // const [name, setName] = useState('');
  // const [price, setPrice] = useState('');
  // const [stock, setStock] = useState('');
  // const [category, setCategory] = useState('');

  // TODO: Agregar función handleSubmit

  return (
    <form>
      <p>TODO: Implementar ProductForm</p>
      {/* TODO: Agregar inputs para name, price, stock, category */}
      {/* TODO: Agregar botón submit */}
    </form>
  );
};

export default ProductForm;


