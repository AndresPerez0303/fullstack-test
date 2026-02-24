import { Product } from '../types/Product';

const API_URL = 'http://localhost:8080/api/products';

// TODO: Implementar las siguientes funciones para consumir la API:

/**
 * Obtiene todos los productos
 * @returns Promise con array de productos
 */
export const getAllProducts = async (): Promise<Product[]> => {
  // TODO: Implementar llamada GET a /api/products
  // Usar fetch o axios
  // Manejar errores
  throw new Error('Not implemented');
};

/**
 * Crea un nuevo producto
 * @param product - Producto a crear (sin ID)
 * @returns Promise con el producto creado
 */
export const createProduct = async (product: Omit<Product, 'id'>): Promise<Product> => {
  // TODO: Implementar llamada POST a /api/products
  // Enviar producto en el body
  // Content-Type: application/json
  throw new Error('Not implemented');
};

/**
 * Elimina un producto por ID
 * @param id - ID del producto a eliminar
 */
export const deleteProduct = async (id: number): Promise<void> => {
  // TODO: Implementar llamada DELETE a /api/products/{id}
  throw new Error('Not implemented');
};

/**
 * BONUS: Actualiza un producto existente
 * @param id - ID del producto
 * @param product - Datos actualizados
 */
export const updateProduct = async (id: number, product: Omit<Product, 'id'>): Promise<Product> => {
  // TODO (BONUS): Implementar llamada PUT a /api/products/{id}
  throw new Error('Not implemented');
};

