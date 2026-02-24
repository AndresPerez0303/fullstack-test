package com.gbc.test.services;

import org.springframework.stereotype.Service;
import com.gbc.test.models.Product;
import java.util.List;
import java.util.Optional;

// TODO: Implementar ProductService con almacenamiento en memoria
//
// Sugerencia: Usar HashMap<Long, Product> o ArrayList<Product>
//
// Métodos a implementar:
// - List<Product> getAllProducts()
// - Optional<Product> getProductById(Long id)
// - Product createProduct(Product product) - con validaciones
// - Product updateProduct(Long id, Product product)
// - void deleteProduct(Long id)
//
// Validaciones requeridas:
// - name no puede estar vacío
// - price debe ser mayor a 0
// - stock no puede ser negativo
// - Lanzar excepción si el producto no existe

@Service
public class ProductService {

    // TODO: Agregar estructura de datos para almacenar productos
    // TODO: Agregar contador para generar IDs autoincrementales

}



