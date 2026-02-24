package com.gbc.test.exceptions;

// TODO: Crear excepción personalizada ProductNotFoundException
// que extienda de RuntimeException
//
// Esta excepción se debe lanzar cuando:
// - Se busca un producto por ID y no existe
// - Se intenta actualizar un producto que no existe
// - Se intenta eliminar un producto que no existe

public class ProductNotFoundException extends RuntimeException {

    public ProductNotFoundException(Long id) {
        super("Producto no encontrado con ID: " + id);
    }

}

